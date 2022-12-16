What happens when user enter the Url in the browser
--------------------------------------------------------------------
Let’s take an example:
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
