According to Statista, more than half of the world’s population regularly use the internet. We rely on the internet for just about everything: checking email, calling an Uber, and ordering food and clothes. Yet in all these interactions it can be hard to see how the internet is used and navigated behind the screens.

This article will allow you to understand what goes on when you enter a URL into a browser.

A solid understanding of Computer Networking is essential to understand this article.

**To do this, we’ll explore the following topics:**

- What is a website?
- URL breakdown
- What is DNS?
- What is HTTP?

**What is a website?**
All websites are files. A barebones website is just an HTML file, however, most websites today comprise of several inter-linked files which include JavaScript and CSS.

Websites exist on powerful computers called servers. Servers are usually located somewhere remote from your computer. In order to display the website on your browser, it has to retrieve it from the server. Each server has an address through which it can be found and accessed called an IP address.

Retrieving a website from a server is a lot like retrieving goods from a warehouse. The warehouse is akin to the server because it is remote, has an address just like servers have IP addresses and stores goods just like servers store or host websites.
![image](https://user-images.githubusercontent.com/29429285/208250421-bbe78340-f0ae-4e1e-872d-898e75fd39a2.png)

IP addresses are represented as four numbers each between 0 and 255 separated by dots.

Here’s an example of an IP address:

203.128.22.10

Every device that is connected to the Internet has an IP address, regardless of whether it is a server or not. Your computer has an IP address too. . Note that all Internet-enabled devices have an IP address but not all of them are servers.

If your browser knows the IP address of a website’s server, it will be able to access it. However, all it knows is the URL.


**URL breakdown**
A **Uniform Resource Locator (URL) **is used to locate a resource, in our case, the website on a server. The requested resource can be a file of any kind, for example, an MP3 file, an image, or a C++ file.

The URL tells your browser two things:

**Domain name:** a unique name that identifies a website. Examples include, facebook.com, educative.io, and google.com. A domain name specifies which server a resource/website is on.

**Path to file:** The files on the server have a location just the way your PC has a file system and each file has a location. The URL also tells where the specified resource that is requested is located on the server. The files or resources on the server have locations that are specified in the URL.

See below for an example of these two parts:
![image](https://user-images.githubusercontent.com/29429285/208250454-a16d3d83-0261-4f3d-acc8-dbd256a52e01.png)

Suppose you enter a URL like the one above into your browser.

In this case, course.php is the requested resource. The resources is located inside the folder called allcourses. Finally, this folder is on the server with the domain name educative.io.

You might be wondering why URLs are used anyways. Why not just type IP addresses directly into browsers?

Well, there are a number of reasons for this.

1. Humans are generally not very good at memorizing random numbers. Imagine memorizing 73.22.49.2 over www.Facebook.com. It’s easy enough for one website but imagine having to do this for all the websites you access in a day. You’d likely end up with the IP addresses written somewhere!

2. The server hosting the website may change over time which would mean the IP address would too. Keeping track of these changes is not easy or convenient for users.

**What is DNS?**
How does a web browser find an IP address using just a URL?

Well, that is where the Internet’s directory service, **Domain Name System (DNS)** comes in.

Each domain name is mapped to a specific IP address. Therefore, if a browser is given a domain it can call that domain to return the paired IP address. These domain name to IP address mappings are called DNS records.

Here is an example of a DNS record:

![image](https://user-images.githubusercontent.com/29429285/208250502-6174e1bb-a971-4f73-8a39-13722161e530.png)

These DNS records are part of a distributed database. This means all the records are not stored at any one server but they are distributed among several global servers.

To save computers searching the entire web each time a domain is entered, the browser checks more local DNS record stores. This is done in 3 steps:

1. The browser’s local cache is checked
2. The operating system’s cache is checked
3. The router is checked for the record.
4. Lastly, the query is sent to the Internet Service Provider (ISP) for it to check its cache.

**Server Hierarchy**
DNS servers are divided into zones that form a hierarchy.

The servers at the top are called root servers and they store IP addresses of other DNS servers, called top level domain servers (TLD).

Top-level domain servers are divided by site type, i.e., .com, .edu, etc. TLD servers have mappings to second-level domain servers such as a server for wikipedia.com and educative.io. These are the DNS servers that contain mappings to the actual servers that host the domain in question.

See below for a chart of the DNS server hierarchy:


![image](https://user-images.githubusercontent.com/29429285/208250542-6620bdc2-9b60-49c6-a2c9-79c5b2d6c813.png)

Hence, if the record cannot be found locally, a full DNS resolution is conducted as follows:

1. The first point of contact for a full resolution is a root server. As of the writing of this post, 1017 instances of root servers exist.

2. The root server returns the IP address of the relevant top level domain server.

3. The top level domain returns the IP address of the second level domain server.

4. The second-level domain server contains the DNS record of the server we are looking for. The second-level domain server returns the IP address to the browser.

A good way to think of this is that a domain name is resolved in reverse:

![image](https://user-images.githubusercontent.com/29429285/208250753-a9f01031-7b2a-4cd8-a8ac-8231efe28e28.png)

1. Though not usually visible, there is a dot after the URL which represents the root server. The root server returns the address of a top-level domain server, in this case for an io server.

2. The io server then returns the address to the Educative DNS server.

3. Finally, the Educative DNS server returns the IP address to an Educative site.

![image](https://user-images.githubusercontent.com/29429285/208250811-1e99a125-a349-404c-be60-9c9235d41a4e.png)

Now that the browser knows the IP address of the server, it can send a request to it.


**What is HTTP?**

These requests follow a ‘protocol’ or ‘rules of communication’ called HyperText Transfer Protocol (HTTP). This protocol dictates the format of the messages, when what message is sent, appropriate responses, and how messages are interpreted. HTTP messages are of two types: request and response.

An HTTP request message consists of a request line and headers. The message starts with a request line and is followed by headers. Here’s a sample HTTP request:

![image](https://user-images.githubusercontent.com/29429285/208250966-01aadcb0-9063-4ead-8ea3-dd4bd87d1433.png)

The request line consists of a request method, a path, and the HTTP version.

The request method, GET, in the example above tells the server what to do. GET, for example, tells the server that the client wants to get the resource found at the given file path.

Other examples of request methods include DELETE, which tells the server to delete a resource at the given path, and PUT, which tells the server to put a supplied resource at the given path. The HTTP version is also specified to cater for the differences between each.

Next come the HTTP headers. Headers allow the client to communicate extra information such as the server type and the date. Each header is on a seperate line and contains a name and value, separated by a colon.

There are many headers which provide different functions. For example, the connection header indicates whether user is on a HTTP connection type.

The server then sends an HTTP response message. Here’s a sample response message:
 
![image](https://user-images.githubusercontent.com/29429285/208250917-64ddaf19-82b1-486a-af45-4a18d7fcf74d.png)

Response messages consist of a status line to start with, followed by a number of headers, followed by a blank line and ends with a resource if any was requested.

The status line consists of the HTTP version and a status code. There are a few types of status codes. A common example is the infamous 404 Not Found status code.

Here’s a quick list of common status codes and what each mean:

1. 200 OK: the request was successful, and the result is appended with the response message.

2. 404 File Not Found: the requested object doesn’t exist on the server.

3. 400 Bad Request: generic error code that indicates that the request was in a format that the server could not comprehend.

4. 500 HTTP Internal Server Error: the request could not be completed because the server encountered some unexpected error.

5. 505 HTTP Version Not Supported: the requested HTTP version is not supported by the server.

Next, the browser receives the response, interprets it and displays something accordingly to the user. For instance, if an HTML page is returned, the browser interprets it and displays it accordingly.

However, most websites today do not consist of simple HTML. This scenario is extremely oversimplified and this actually happening is very rare. Real world websites often consist of other resources such as images which are requested from the server via subsequent HTTP requests.

