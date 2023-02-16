### 9h30 - 9h45
Présentations
Tour de table
Sondage : tout le monde a VS Code/VS Codium installé ?
Présentation de la méthode d'évaluation

### 9h45 - 10h
Terminologie de base:
- syntaxe vs sémantique
- Langage de balisage - meta-langage vs langage de programmation
- Pourquoi les langues que nous traitons ont-elles gagné ? Dans le sens où ils ont occupé une partie très présente du Web ?
    - standardisation - World Wide Web Consortium

## 10h10 - 10h30
### L'architecture du Web
Modèle TC/IP
#### Layer 1: Network Access Layer
La couche d'accès au réseau, également connue sous le nom de couche de liaison de données, gère l'infrastructure physique qui permet aux ordinateurs de communiquer entre eux sur Internet. This covers ethernet cables, wireless networks, network interface cards, device drivers in your computer, and so on.

La couche d'accès au réseau comprend également l'infrastructure technique - telle que le code qui convertit les données numériques en signaux transmissibles - qui rend la connexion au réseau possible. --> Faciliter l'échange d'informations en assurant le réseau physique sous-jacent.

#### Layer 2: Internet Layer
La couche Internet, également appelée couche réseau, contrôle le flux et l'acheminement du trafic afin de garantir la rapidité et la précision de l'envoi des données. Cette couche est également responsable du réassemblage du paquet de données à sa destination. S'il y a beaucoup de trafic Internet, la couche Internet peut prendre un peu plus de temps pour envoyer un fichier, mais il y aura moins de risques qu'une erreur corrompe ce fichier.

- Protocole IP (Internet Protocol) : Gère l'échange de données au moyen de paquets de données. Les informations IP sont attachées à chaque paquet, et ces informations aident les routeurs à envoyer les paquets au bon endroit (chemin).
- Internet Control Message Protocol (ICMP), qui gère la transmission des messages de contrôle et d'erreur entre les systèmes. Le ping est un service Internet qui fonctionne par le biais du protocole ICMP :

> ICMP is for error reporting. When two devices connect over the Internet, the ICMP generates errors to share with the sending device in the event that any of the data did not get to its intended destination. For example, if a packet of data is too large for a router, the router will drop the packet and send an ICMP message back to the original source for the data.

> IP stands for "Internet Protocol," which is the set of rules governing the format of data sent via the internet or local network. IP has the task of delivering packets from the source host to the destination host solely based on the IP addresses in the packet headers. For this purpose, IP defines packet structures that encapsulate the data to be delivered. It also defines addressing methods that are used to label the datagram with source and destination information.

#### Layer 3: Transport Layer
The transport layer provides a reliable data connection between two communicating devices. It’s like sending an insured package: The transport layer divides the data in packets, acknowledges the packets it has received from the sender, and ensures that the recipient acknowledges the packets it receives.

The Transport layer provides message transport services between applications running on remote systems.

- Transmission Control Protocol (TCP) operates in this layer. Provides reliable, connection-oriented message transport.

>  IP to ensure reliable transmission of packets. TCP includes mechanisms to solve many of the problems that arise from packet-based messaging, such as lost packets, out of order packets, duplicate packets, and corrupted packets.

- Datagram Protocol (UDP) for services  -- such as video and audio streaming services -- which do not require the reliability (and overhead) associated with TCP (ex. streaming services would sacrifice a few lost packets to get faster performance out of thei data streams).
- The protocols in this layer may provide error control, segmentation, flow control, congestion control, and application addressing (port numbers).

#### Layer 4: Application Layer
The application layer is the group of applications that let the user access the network. For most of us that means email, messaging apps, and cloud storage programs. This is what the end-user sees and interacts with when sending and receiving data.
Highest level within the TCP/IP protocol stack.

- This is the layer in which all application protocols, such as SMTP, FTP, SSH, HTTP, operate. Processes are addressed via ports which essentially represent services.

### 10h30 - 11h - Histoire du Web
- La vision de Tim Berners Lee
Le Web n'est pas seulement composé des trois langages que nous allons étudier, il fonctionne grâce à une série de composants et de protocoles de communication hautement standardisés.
- [Vedi i protocolli più comuni, spiegali e spiega la stratificazione]
- Essaye de voir comment les protocols que vous avez mentionnés (en particulier HTTP) interagissent avec les langages couverts par le cours.

 Les origines d'Internet:
 - **Dal 1957** : USA, Advanced Research Projects Agency (ARPA): organismo del ministero della difesa statunitense, che alla fine degli anni 50 assunse il controllo di tutte le ricerche scientifiche a lungo termine in campo militare.
 - **Dal 1965** : L'ARPA cominciò ad avere problemi di gestione : aveva diversi computer, che utilizzavano formati diversi formati di archiviazione. La condivisione di file e l'utilizzo di programmi simili su computer diversi era quasi impossibile.
 [**Come erano stati creati questi programmi? Di che programmi si trattavano?**]
 - **1966** : Robert Taylor, direttore della divisione informatica ARPA, parlò con l'allora direttore dell'ARPA (Charlie Hertzfeld) e ottenne uno stanziamento di milione di dollari per progetto ARPANET --> progetto svolto dall'IPTO (Information Processing Techniques Office) sotto la responsabilità di Jospeh Licklider, psicologo e poi scienziato al MIT di Boston. In questo laboratorio fu ideata una tecnologia basata di scambio dati basata sulla *commutation de paquet* (packet switching) -- per condividere più nodi in modo non deterministico, suddividendo l'inferomazione tra trasferire in pacchetti trasmessi individualmente e in sequenza, seguendo un meccanismo relativo a tabelle di intradamento. -- pacchetti prendono diverse strade per arrivare a destinazione. + Packets are made of a **header** and a **payload**. Data in the header is used by networking hardware to direct the packet to its destination

- **1969** : Primi due nodi di Internet tra l'UCLA e l'université de Standford. - fu utilizzata l'applicazione Telnet. Sii aggiunsero alla connessione le università di Santa Barbara e dello Utah.

- **1973 - 1978** : Nel 1973 Robert Kahn, di ARPA, e Vinton Cerf, della Stanford University, misero per iscritto la struttura di Internet. Sempre nello stesso anno fu istituito il progetto del protocollo di controllo trasmissione (TCP), standard indispensabile per la comunicazione tra reti di computer. Nel 1978 Cerf, Postel e Crocker hanno aggiunto un protocollo tra rete e rete (IP), mettendo a punto il definitivo protocollo su cui ancor oggi opera Internet, il TCP/IP.

- **1983** : MILNET per soli scopi militari

- **1988 - 1990** : Nel 1986 la «National Science Foundation» americana creò la rete NSFNET per collegare le università americane ai propri supercalcolatori e raccordarle con ARPANET. Nel 1988 iniziò a usare come sua dorsale ARPANET. Nel 1990 ARPANET, ormai obsoleta, venne smantellata. La NSF venne incaricata dal governo statunitense di amministrare l'intera rete accademica negli USA.

- **1990** : A Ginevra, T.B. insieme a Robert Cailliau misero a punto il protocollo HTTP e una prima specifica d HTML. [Primo sito Web](https://web.archive.org/web/20150717103715/http://info.cern.ch/hypertext/WWW/TheProject.html) a Ginevra il 6 agosto 1991. T.B. si è ispirato a all'utopia di un ipertesto totalmente aperto, utopia che si era già incarnata in diversi progetti: ex. **XANADU** o **Hypercard**, un progetto sull'ipertesto creato alla fine degli anni 80 da Bill Atkinson, form Apple Computer Inc.

[**Rivedi i due progetti menzionati - XANADU e Hypercard**]



### 11h - 11h30 - HTML : Contexte historique
- **1989** : Tim Berners-Lee travaillait dans la section de services informatiques du CERN, le Laboratoire européen pour la physique des particules à Genève, en Suisse.
- La recherche en physique des particules implique souvent une collaboration entre des instituts du monde entier. Berners-Lee a suggéré de créer des liens textuels entre les fichiers : some way of linking documents together by using buttons on the screen, which you simply clicked on to jump from one paper to another.
- T.B. pensa che utilizzare an existing hypertext package (un tool di ipertesto da applicare globalmente) non sia una buona idea, perché bisognerebbe pensare a tutti i tipi di computer che sono connessi a Internet ( Personal Computers, Macintoshes, UNIX machines and simple terminals.) e erano presenti molti protocolli di pubblicazione (SGML, Interleaf, LaTex, Microsoft Word, and Troff among many others).
- Serviva qualcosa di molto semplice, almeno all'inizio. Un protocollo molto semplice : HTTP - for retrieving il testo di altri documenti attraverso link ipertestuali.
- The text format for HTTP was named HTML, for HyperText Mark-up Language. [**menziona in questo caso l'importanza del balisage'**].

[**Spiega meglio il protocollo HTTP**]

- The HTML that Tim invented was strongly based on SGML (Standard Generalized Mark-up Language), an internationally agreed upon method for marking up text into structural units such as paragraphs, headings, list items and so on.
- idea che il linguaggio era indipendente del luogo fisico in cui viene affiché (nel browser o in un software specifico, e dalla macchina utilizzata).
- Elements SGML qui ont été repris par HTML: p - h1 --> h6 - ol - ul  (clairement SGML ne comprend pas les liens <a href="url">link text</a>. Pour ouvrir dans une nouvelle tab : <a href="url" target="_blank">link text</a> ).
- **September 1991: Open discussion about HTML across the Internet begins**: WWW-talk mailing list - HTML comme un langage de masse. La rencontre entre T.B et Dave Ragget (Hewlett-Packard's Labs in Bristol, England), a conduit à la naissance de HTML+, une version enrichie de HTML.
- **Late 1992: NCSA is intrigued by the idea of the Web**: Joseph Hardin and Dave Thompson de l'Université de l'Illinois: après avoir téléchargé deux navigateurs open source de la CRCEN, on décidé de créer leur propre navigateur : *Mosaic*, publié en **1993**.
- implementation of img tag par Marc Andreessen
- Des autres navigateurs ont été crée dans ce periode: ex. un navigateur pour Linux par Lou Montulli et un navigateur et Arena, crée par Dave Raggett (le même chercheur qui avait implementé HTML+).
- **1994**: la première conference du Web, organisée par le CERN. Les participants étaient presque tous des universitaires. - La presentation **Interoperability: Why Everyone Wins** de Dan Connolly a été la première présentation officielle a souhaiter une standardisation de HTML.
- **1994**, an *Internet Engineering Task Force* (communauté de chercheurs, network designers, opérateurs qui constitue le corps international pour la standardisation d'Internet.
working group was set up to deal with HTML.
- **Juillet 1994** : HTML 2, pour mettre ordre dans la multiplication de standards après la publication de HTML.
- **Novembre 1994** : Netscape, un navigateur crée par une equipe dirigée par Marc Andreessen (il travaillait pour le navigateur Mosaic et avait proposé le tag `img`).
- **Fin 1994** : World Wide Web consortium - dirigé par T.B. Du consortium faisaient partie des noms qui on a déjà rencontre : comme Dan Connolly - Dave Raggett (présentation html2). [Le consortium est parrainé par un certain nombre de sociétés qui bénéficient directement de ses travaux sur les normes et autres technologies du Web. Parmi les sociétés membres figurent Digital Equipment Corp, Hewlett-Packard Co, IBM Corp, Microsoft Corp, Netscape Communications Corp et Sun Microsystems Inc, entre autres.]
- **1995** : Nouveau attributes, mais certaines ont été l'objet de polémiques par la communauté d’ingénieur (comme BGCOLOR attribute of the BODY element and FONT FACE, which control stylistic aspects of a document, found themselves in the black books of the academic engineering community). Le slogan c'était : `You're not supposed to be able to do things like that in HTML`.
- **Mars 1995**: Proposition HTML3 par David Raggett:
    - FIG au lieu que IMG
    - features pour le balisage d'elements mathématiques
    - style
    - class
    - information et organisation tabulaire in HTML [**vedi meglio il concetto di tabular information and organizatio in HTML**].
    La proposition à été considérée trop plaine de changements par le IETF.
- **Novembre 1995**: réunion de quelques membres du Consortium W3 pour réfléchir à CSS + Internationalisation de HTML: proposition par Gavin Nicol, Gavin Adams de étendre les capacités du HTML pour marquer d'autres polices que le latin 1 et d'autres alphabets.
- **February 1996** : Le WW3 Consortium decide de former le HTML Editorial Review Board pour aider à la standardisation. ERB était composé par représentants de IBM, Microsoft, Netscape, Novell, Softquad and the W3 Consortium et était dirigé par Dan Connolly (représentant du Consortium).
- **April 1996** : The W3 Consortium working draft on Scripting comes out. Ce draft deviendra partie du standard HTML.
- **Juillet 1996** : Microsoft intéressé aux open standards. Préoccupation partagée que le standards propriétaires auraient tué le Web.
- **Décembre 1996** : 'Cougar' --> The HTML ERB became the HTML Working Group and began to work on 'Cougar', la version que deviendra HTML4 avec des innovations pour supporter des autres langues et pour l'inclusivité + *style sheet support*, extensions to forms, scripting and much more.
- **Janvier 1997** : La spécification HTML3.2 est maintenant stable et validé par la plus part des acteurs dans le Web. HTML 3.2 took the *existing IETF HTML 2* standard and incorporated features from *HTML+* and *HTML 3*. HTML 3.2 included *tables*, *applets*, *text flow around images*, *subscripts and superscripts*.
- **Printemps 1998** : Cougar est complètement devenu HTML4.0 et c'est la recommandation proposé par WW3, mais pas encore implémenté par la plus part de navigateurs. Thing are heading in that direction.

### 11h45 - 12h00 - CSS : Contexte historique
- **Novembre 1995** : Bert Bos, Håkon Lie, Dave Raggett, Chris Lilley and others from the World Wide Web Consortium and others met in Versailles near Paris to discuss the deployment of Cascading Style Sheets.
Style sheets for HTML documents begin to take shape. The name Cascading Style Sheets implies that more than one style sheet can interact to produce the final look of the document. L'idée c'était de donner la possibilité de créer des stiles simples pour HTML, comme on ferait on Microsoft Word (lancé en 1983).
- CSS implémenté en peu de temps par Microsoft sur Internet Explorer (crée en Août 1995)
- **Janvier 2008** : HTML5 recommandé par le WW3 Consortium - qui comprends maintenant Apple, Google, Mozilla, Microsoft. Backward-compatible: intended to subsume not only HTML 4 but also XHTML 1 and DOM Level 2 HTML. Introduction des APIs pour des applications web plus complexes. Low-powered devices in mind. Nouvelles elements pour inclure nativement elements multimedia (<video>, <audio>) et elements graphiques (<canvas>) + sections extensibles comme <summary>...</summary> and <details>...</details> qui avant dépendaient de CSS ou JavaScript.
    - To enrich the semantic content of documents, new page structure elements such as <main>, <section>, <article>, <header>, <footer>, <aside>, <nav>, and <figure> are added.
    -  New attributes were introduced, some elements and attributes were removed, and others such as <a>, <cite>, and <menu> were changed, redefined, or standardized.
    - The APIs and Document Object Model (DOM) are now fundamental parts of the HTML5 specification,[7] and HTML5 also better defines the processing for any invalid documents.
    - HTML 5 introduces several input types like Date, DateTime-local, time, week, month, email, tel, URL, search, range, color and number. To improve the user experience and to make the forms more interactive. However, if a browser failed to recognize these new input types, it will treat them like a normal text box.


CCS3: déclarer une variable avec CSS3. --> Il n'y a pas besoin d'utiliser SAS ou des autres systèmes plus compliques.

### 13h - 13h15
Types d'éléments en HTML
![HTML elements](html_categories.png)

### 13 - 13h15
La structure d'un fichier HTML.

#### Les metadonnées :
<TITLE>My first HTML document</TITLE>
      <meta charset="UTF-8">
      <meta name="description" content="Free Web tutorials">
      <meta name="keywords" content="HTML, CSS, JavaScript">
      <meta name="author" content="John Doe">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="icon" type="image/x-icon" href="/images/favicon.ico">

#### Las structure 

<!DOCTYPE HTML>
<HTML>
   <HEAD>
      <TITLE>My first HTML document</TITLE>
      <meta charset="UTF-8">
      <meta name="description" content="Free Web tutorials">
      <meta name="keywords" content="HTML, CSS, JavaScript">
      <meta name="author" content="John Doe">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
   </HEAD>
   <BODY>
      <P>Hello world!</P>
   </BODY>
</HTML>

<!--The initial-scale=1.0 part sets the initial zoom level when the page is first loaded by the browser.
 CSS media queries to apply different styling for small and large screens.

 1. Do NOT use large fixed width elements - For example, if an image is displayed at a width wider than the viewport it can cause the viewport to scroll horizontally. Remember to adjust this content to fit within the width of the viewport

 <!--utilizziamo il tag link anche =-->
-->

N.B. : Inline elements vs. block elements

### 13h15 - 13h30
Images, tableaux, links + exercices

- Images :
  <img src="pic_trulli.jpg" alt="Italian Trulli">

  - alt :  The broken link icon and the alt text are shown if the browser cannot find the image.
  - src attribute : specifies the path (URL) to the image


- Links
  <a href="https://www.w3schools.com/">Visit W3Schools.com!</a>

  - relative URLs :
  - target="_blank" to open link in a new tab : <a href="https://www.w3schools.com/" target="_blank">Visit W3Schools.com!</a>
  - button that act as a link : <form action="https://google.com">
                                  <input type="submit" value="Go to Google" />
                                </form>
  - image as link : <a href="https://ecrituresnumeriques.ca/fr/2022/12/13/Debugue-tes-humanites---Saison-three">
                      <img src="debugue.jpg" alt="Débugue tes humanités">
                    </a> 

- Tables
  - <table>
  - <caption> (optional)
  - <tr> table raw
  - <th> table header
    - scope="col"  vs.  scope="row"
  - <td> table data

<!-- 
<table>
    <caption>Ceci est un tableau HTML</caption>
    <tr>
        <th scope="col">Item 1</th>
        <th scope="col">Item 2</th>
        <th scope="col">Item 3</th>
    </tr>
    <tr>
        <th scope="row">feature 1</th>
        <td>données 1</td>
        <td>données 2</td>
    </tr>
    <tr>
        <th scope="row">feature 2</th>
        <td>données 2</td>
        <td>données 2</td>
    </tr>
    <tr>
        <th scope="row">feature 3</th>
        <td>données 2</td>
        <td>données 2</td>
    </tr>
</table>
-->

### 13h45 - 14h00
- N.B. : Les différents éléments peuvent être reliés entre eux. Idéalement, nous pouvons ensuite insérer une liste d'éléments dans un tableau, ou des images, ou des liens... 
Essayons !

- Exercice : débugger un fichier HTML plein d'erreurs !


### 14h00 - 14h30
Exercises Antoine : Advanced HTML commands

### 14h30 - 14h45
Onlinck events 


### 14h45 - 15h15
Introduction to CSS
Esempi semplici in CSS + esercizi



### 15h15 - 15h30
Messa in stile dei bottoni, crea bordo etc. 
- on event truc


### 15h30 - 15h45
Practice using div as a container. 
Block elements : they take the entire line in their container, rather than on the page.
But as div by default is a block element. We have to convert into an inline block element.

<input class="search-bar" type="text" placeholder="Search">

<div class="video-preview">
  <img class="thumbnail" src="">
  <p class="video-title"></p>
</div>

<div class="video-preview">
  <img class="thumbnail" src="">
  <p class="video-title"></p>
</div>

.search-bar  {
  display:block;
}
}

.video-preview {
  width:300px;
  display:inline-block;
  vertical-align: top;
  margin-right: 15px;
}


### 15h45 - 16h00   
Nested Layout Technique

Vertical and Horizontal layouts

Esempi basici

#### Vertical Layout 
Va benissimo che i div all'interno del vertical layout occupano tutto lo spazio
<div class="video-preview">
  <div>
    <img class="thumbnail" src="">
  </div>
  <div>
    <p class="video-title"></p>
    <p class="video-author"></p>
    <p class="video-stats"></p>
  </div>

  #### Horizontal Layout nella seconda parte
  <div class="video-preview">
  <div>
    <img class="thumbnail" src="">
  </div>
  <div>
    <div class="channel-picture">
      <img class="profile-picture" src="image">
    </div>
    <div class="video-info">
      <p class="video-title"></p>
      <p class="video-author"></p>
      <p class="video-stats"></p>
    </div>
  </div>

.video-title {
  margin:top:0;
}

.profile-picture {
  width:100%
}

.channel-picture {
  display: inline-block;
  width: 50px
  vertical-align:top
}

.video-info {
  display: inline-block;
  width: 200px
}


Inline block to allow them to appear beside each other