# Introduction
In this article, I will show you how we can easily deploy node js application on Amazon EC2 server and run on a live url.


# EC2
Why EC2? Because it’s free and provide very customizable configurations to the end user. We can select our favourite Linux based operating system and install all the required utilities and software on that OS.

# Steps that I will follow:
- Create account on aws [x]
- Launch an EC2 instance [x]
- SSH into your instance []
- Install Node.js []
- Install Git and clone repository from GitHub
- Start the node.js app
- Keep App running using Pm2

# Launch an EC2 instance
- Now that the signup process is complete, I went to aws console and provide login credentials. Once I logged in , I can see all the aws services under the AWS Services section.
- I Click on the EC2 Service under Computer Service,it will show us EC2 Dashboard page, on this page I just click on Launch Instance button under Create Instance Section.
- I choose Amazon Machine Image for launching our instance. Amazon provides various types of images, but we will stick with Ubuntu 18.04. It is more secure and 70 servers are using different versions of linux operating system.
- After selecting the machine, I need to configure our machine (otherwise I can skip all these next steps and launch instance directly). Click on Next Add Storage button. I select default storage configuration and click the Next Add Tags button.
- I open some ports of our server to communicate with outer world. We can also configure these ports after launching the server. I click on Add Tag button and add 80, 8080, and 22 ports.
- Then i click on Next Review and Launch button.
- Once here I careate a new key pair and download it on my local machine. Otherwise I can not generate this key after launching your instance.And after generating the key pair I click on Launch Instances button.

# SSH into your instance 
- So I have successfully launched our EC2 server. Now I will access the server from my local machine using terminal on Linux. (by the way If you are using Windows you need to change your .pem key to .ppk format) 
- Now I am connected with your EC2 remote server.


#  Install Nodejs
- Now that I am connected to the instance, I can start installing the required packages in the environment for my node.js app to work. I will install the latest version of Node JS which is 12.x. Once I am done with the installation type “node  -v ” on my terminal, it will show you v12.4.0 on terminal screen.


# Install Git and clone repository from GitHub
- Install git on Ubuntu
Basically we don’t need to install git on ubuntu 18.04. It is already installed on our server. we can check using git --help command.
-------> If it is not installed you can install using the following command :
  
sudo apt-get install git


# Keep App running using PM2  
- The app is running as soon as you open the terminal and it will terminate as you will close the terminal. In that case I will install PM2 (Production manager 2) to keep live my app after closing my terminal or disconnect from remote server. Run the following command:
```
npm install pm2 -g
```


- It will install PM2 package globally on server. Switch to our app directory and run:
```
sudo pm2 start app.js
```
- Now even if you close the terminal and check the url in the browser, the app will be running. Sweet! For automatically running PM2 when the server restarts, issue the following command:
```
sudo pm2 startup
```
Now I can reboot the instance using sudo reboot and connect after 1 min. I can still see the app is running on port 3000 using:
```
PM2 list
``` 
   Or : 
```
PM2 show app
```

I can access the app on my browser also.

![933B3D07-A95F-4E48-B35B-F8EA227F2E8B_1_201_a](https://github.com/chekkouri/CloudComputingProject/assets/61733267/b9fbe8bb-c0ab-475a-a4c3-b866e1db9b3c)

# Clone app on server
- I clone my repository using the command down below : 
git clone https://github.com/chekkouri/CloudComputingProject.git
- After cloning the repository, run in your terminal :

```
ls   
cd CloudComputingProject   
cd server
```

# Start the node.js app with pm2 to keep the app alive even when we close the console
I have successfully cloned the app on my server. And I run the following command inside my project directory:

```
npm install
```

```
pm2 start app.js
```
It will install all the required packages for the app. There are several ways to start our app but we will use simple command:






