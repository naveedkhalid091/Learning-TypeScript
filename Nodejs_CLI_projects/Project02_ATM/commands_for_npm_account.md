## Steps to publish the project at `npm` account. 

## STEP-1 first command
Below command must be used inside your project at the top of your project so that you may able to publish your project into `npm` account. 

` #! /usr/bin/env node  `

Note: The explaination of writting this code is mentioned at the last of this notes. 

## STEP-2 Changes required in package.json file.

i) Choose the Unique Name of your Project: The name must be unique and you can make it unique by mentioning your project name followed by the account ID. e.g. @naveedkhalid091/NumberGuessingGame. 
ii) `Additional Command (Optional)`: If your `project name` is starting with `@` then you will need to write below command inside the `package.json` file but if your project name is not starting with `@` then you can ignore this step. This is becasue node try to publish projects privately if you have `@` available. So you need to write that its a public project.  

Write the following command: 

"publishConfig":{
    "access":"public"
}

iii) `bin command`: You need to mention below command as well. 

 `"bin":"fileName.js"` e.g. ` "bin":"index.js" `,


## Step 3: Login to npm account through terminal 

You can logged into `npm account` by using below command in terminal:

  ` npm login `

## How to Access your Published Accounts on terminals: 

` npx WriteYourprojectName `

## How to install your projects on other Laptops

` npm i @naveedkhalid091/numberguessinggame `

Note: After Installation when user will mention only project name, then user will get access to use the project. 

## Explaination of writing command ` #! /usr/bin/env node `, is mentioned below:

Explanation:
1) `#!`: This is the shebang sequence that tells the operating system that this file should be executed by the interpreter specified in the path.
2) `/usr/bin/env`: This part of the shebang line is used to find the node executable in the system's PATH. The env command is commonly used to locate and execute the appropriate interpreter.
3) `node`: This specifies that the script should be run using Node.js. 

