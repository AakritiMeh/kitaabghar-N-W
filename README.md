KITAAB GHAR

IDEA OF THE PROJECT:

KitaabGhar is a web application that is designed to make the knowledge and information more accessible to the people, especially to those who can’t read, or are blind but are interested to learn and gain knowledge.

This project incorporates the use of text to speech converter and also incorporates animated visuals that makes the content more appealing to the user.

This also has a platform where people can buy and sell ebooks, or rare research papers,or some other study material at a lower price and hence make it affordably available for the people.

TECH STACK TO BE USED

Frontend- ReactJs, redux
Books Selling and buying - web3 based → solidity, Lighthouse storage
Pdf Summarizer and text To speech with video animations → Self made AI Scripts

COMPONENTS OF THE PROJECT
CONTRACTS:-

Transaction.sol — This contract will take care of the transactions between the buyer and seller of the material
StoreOnChain.sol — This contract will be used in uploading the material to the chain.

FRONTEND:-
Components Folder — This folder consists of all the reusable components that we will be using in the project repeatedly, it can be for example a button.
Pages Folder — This folder will consist of all the different web pages that we create. For example, page to connect to wallet, page to upload materials, page to buy a material, page to upload your file and let the AI do its job of converting it to an animated video of explanation, etc.
Styles — This folder will contain the CSS for all the pages/ components.

LIGHTHOUSE STORAGE:-

This part will be dealt in the frontend itself and the documents uploaded by the people will be uploaded to this storage which on the backend uses IPFS to store documents

The whole document will not be visible on the chain until it's bought by someone to use.Only a part of it will be(say 1/10th of the initial part of the document).

The document will be split into 10 parts and then uploaded to the storage in order to ensure security and privacy of the document.While rendering the document will be reconstructed, that is, all parts of it will be rejoined back and then shown to the user.

ARTIFICIAL INTELLIGENCE:-
The Project will be using an inhouse NLP model to summarize the input data and extract the required summary. Right now we’re using a very rudimentary weighted mean text summarization algorithm.

ANIMATIONS:-
The Project uses advanced speech models to attain an understandable speech pattern along with rigged animations and web scraping for an appealing visual presentation.

Our Figma link for the idea, this has all what we are going to do in our project, it represents the complete wireframe of it:
https://www.figma.com/design/EzKxr7r3cduQwR7iXPhQbs/KITAABGHAR?node-id=0-1&t=W1iPzypdBIDBU9zQ-1
