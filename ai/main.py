# import pdf
# import summariser
# import tts
# import anim
# import image

# file=input()
# #lang=int(input("0:English\n1:Hindi\n2:Tamil\n"))
# lang=0
# lingo=[["en-US","en"],["hi-IN","hi"],["ta-IN","ta"]]
# pdf.pdf(file)
# summariser.summarise(file)
# with open(str(file)+"1.txt",'r') as f:
#     text=f.read()
#     text=text.split('\n')
#     images=text[-1]
#     text=text[:-3]
#     text='\n'.join(text)
#     tts.final_audio(text,lang=lingo[lang])
#     print("Audio Generated!")
# images=images.split()
# for i in images:
#     image.get_image(i,"images/"+i+".png")
# anim.anim()


import sys
import pdf
import summariser
import tts
import anim
import image
import os

def main(file):
    lang = 0
    lingo = [["en-US", "en"], ["hi-IN", "hi"], ["ta-IN", "ta"]]
    file_base = os.path.splitext(file)[0]
    pdf.pdf(file)
    summariser.summarise(file)

    with open(str(file) + "1.txt", 'r') as f:
        text = f.read()
        text = text.split('\n')
        images = text[-1]
        text = text[:-3]
        text = '\n'.join(text)
        tts.final_audio(text,path="/home/aakriti/Documents/PROJECTS/kitaabghar/ai/" ,lang=lingo[lang])
        print("Audio Generated!")
    
    images = images.split()
    for i in images:
        image.get_image(i, "images/" + i + ".png")
    anim.anim()

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python main.py <file_path>")
        sys.exit(1)
    main(sys.argv[1])

