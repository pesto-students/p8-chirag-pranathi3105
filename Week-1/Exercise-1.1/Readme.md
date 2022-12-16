**What happens when user enter the Url in the browser**
--------------------------------------------------------------------
**Let’s take an example:**
--------------------------------------------------------
https://www.example.com/page1

Here, the first part is ‘https’. This basically tells the browser which protocol it should use. It can be http, https, ftp, etc. A protocol is a set of rules that browser use for communication over the network. 'https' is basically a secure version, i.e. information is exchanged in a secure way.

The second part www.example.com is a domain name. You can relate it to your friend’s house. It is an address of website. We use it to reach to the server (trained computer) that is responsible for serving the information for that website.

After hitting the URL, the first thing that needs to happen is to resolve IP address associated with the domain name. DNS helps in resolving this. DNS is like a phone book and helps us to provide the IP address that is associated with the domain name just like our phone book gives a mobile number which is associated with the person’s name.
    
![URL](https://user-images.githubusercontent.com/29429285/208106426-8655edc1-e695-4fff-8150-3f216d1f4e31.png)

This is the overview, but there are four layers through which this domain name query goes through. Let’s understand the steps:

1. After hitting the URL, the browser cache is checked. As browser maintains its DNS records for some amount of time for the websites you have visited earlier. Hence, firstly, DNS query runs here to find the IP address associated with the domain name.

2. The second place where DNS query runs in OS cache followed by router cache.

3. If in the above steps, a DNS query does not get resolved, then it takes the help of resolver server. Resolver server is nothing but your ISP (Internet service provider). The query is sent to ISP where DNS query runs in ISP cache.

4. If in 3rd steps as well, no results found, then request sends to top or root server of the DNS hierarchy. There it never happens that it says no results found, but actually it tells, from where this information you can get. If you are searching IP address of the top level domain (.com,.net,.Gov,. org). It tells the resolver server to search TLD server (Top level domain).
 q
5. Now, resolver asks TLD server to give IP address of our domain name. TLD stores address information of domain name. It tells the resolver to ask it to Authoritative Name server.

6. The authoritative name server is responsible for knowing everything about the domain name. Finally, resolver (ISP) gets the IP address associated with the domain name and sends it back to the browser.

After getting an IP address, resolver stores it in its cache so that next time, if the same query comes then it does not have to go to all these steps again. It can now provide IP address from their cache.

This is all about the steps that is followed to resolve IP address that is associated with the domain name. Have a look below to better understand:

![image](https://user-images.githubusercontent.com/29429285/208107884-cfc87be3-fa95-47d8-815f-abc0608cdb50.png)

**Functionality of the browser:**
1. The main function is to retrieve information from the World Wide Web and making it available for users
2. Visiting any website can be done using a web browser. When a URL is entered in a browser, the web server takes us to that website
3. To run Java applets and flash content, plugins are available on the web browser
4. It makes Internet surfing easy as once we reach a website we can easily check the hyperlinks and get more and more useful data online
5. Browsers user internal cache which gets stored and the user can open the same webpage time and again without losing extra data 
6. Multiple webpages can be opened at the same time on a web browser
7. Options like back, forward, reload, stop reload, home, etc. are available on these web browsers, which make using them easy and convenient

**High level components of a browser**
1. User Interface backend – It can be used for painting basic images like windows or combo box. The backend exposes only a generic platform independent interface. Beneath it, user interface methods are used by the operating system.
2. JS Interpreter – JavaScript and all other types of scripting is parsed and executed by the inbuilt interpreter.
3. Networking – Performs implements of HTTP request and response.
4. Data Storage – All types of data, like cookies are saved locally by the browser. Storage mechanisms like WebSQL, FileSystem, localStorage are also supported by the browser.

**Parser HTML,CSS,etc**
1. HTML- The word parsing means to divide something into its components and then describe their syntactic roles. The word processing is a familiar word and stands for dealing with something using a standard procedure. Combined these two explain how HTML parser works in generating DOM trees from text/html resources.

This approach defines the parsing rules for HTML documents for determining whether they are syntactically correct or not. The points where the syntax fails to match, a parse error is initiated. At the end of the procedure if a resource is determined to be in the HTML syntax, then it is an HTML document.

OVERVIEW OF THE PARSING MODEL

image.png
2. CSS-The CSSParser inherits from a generic List of KeyValuePair. The key will be the CSS selector. The value will be another list of key value pairs. The key here is the CSS attribute name. The value will be the CSS property value. I used a generic List instead of a Dictionary because Cascading Style Sheets can have the same selector or attributes listed multiple times.
public partial class CSSParser : List<KeyValuePair<String,List<KeyValuePair<String,String>>>>, ICSSParser

3. XML- An XML parser is a software library or package that provides interfaces for client applications to work with an XML document. The XML Parser is designed to read the XML and create a way for programs to use XML.

XML parser validates the document and check that the document is well formatted.

Let's understand the working of XML parser by the figure given below:
image.png

