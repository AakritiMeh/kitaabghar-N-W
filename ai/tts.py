import json
import requests
import base64
from langdetect import detect
from pydub import AudioSegment
import io

def detect_language(text):
    try:
        language = detect(text)
        return language
    except:
        return "unknown"

def Translate_to_func(text, lang='hi'):
    translator = Translator()
    translated = translator.translate(text, src='en', dest=lang)
    return translated.text  # Return the translated text

def fetch_audio(text, option="FEMALE",lang="en-US"):
    api_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNTNhMDdmMTUtZGY2OC00MGY1LThlOTctMzQwOWZlNGQ3MGIzIiwidHlwZSI6ImFwaV90b2tlbiJ9.Agsx4L1XtyLX-xKTEUPHEoN0kBqtuetLeoyLU8xoYvs"  # Replace with your actual API key
    headers = {"Authorization": f"Bearer {api_key}"}
    url = "https://api.edenai.run/v2/audio/text_to_speech"
    payload = {
        "show_original_response": False,
        "fallback_providers": "",
        "providers": "microsoft",
        "language": lang,
        "option": option,
        "text": text
    }
    print("fetch api")
    response = requests.post(url, json=payload, headers=headers)
    print("fetched")
    if response.status_code == 200:
        result = json.loads(response.text)
        
        if 'microsoft' in result and 'audio_resource_url' in result['microsoft']:
            audio_url = result['microsoft']['audio_resource_url']
            audio_response = requests.get(audio_url)

            if audio_response.status_code == 200:
                audio_content = audio_response.content
                audio_segment = AudioSegment.from_mp3(io.BytesIO(audio_content))
                return audio_segment
            else:
                print(f"Failed to download audio from {audio_url}. Status code: {audio_response.status_code}")
        else:
            print("Audio data not found in the response.")
    else:
        print(f"API request failed with status code: {response.status_code}")

def final_audio(text_doc,path="",lang=["en-US","en"]):
    text = text_doc.split(".")
    concatenated_audio1 = AudioSegment.empty()
    concatenated_audio2 = AudioSegment.empty()
    beep_segment = AudioSegment.from_mp3("beep.wav")
    for i in text:
        if i=="@123":

            concatenated_audio1+=beep_segment
            concatenated_audio2+=beep_segment-100
        if i and i.strip() and i!="@123": 
            print(i)
            audio_segment = fetch_audio(i,lang=lang[0])
            if audio_segment:
                concatenated_audio1+= audio_segment-100
                concatenated_audio2+=audio_segment
                pass
            else:
                print("Audio segment is None for:", translated_text)
        else:
            print("Skipping empty or None text.")
    concatenated_audio1.export(path+"output1.mp3", format="mp3")
    concatenated_audio2.export(path+"output2.mp3",format="mp3")
if __name__=="__main__":
    text=input()
    final_audio(text)