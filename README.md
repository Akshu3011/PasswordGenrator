
# PasswordGenrator
Password generator with user prompted password criteria

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```


## Description

The password generator application will collect the user preference to randomly generate the strong password.
The Password length can be of 8-128 characters with a combination of at least one of the character types from Lowercase characters, Uppercase characters, Numerics and Special Characters.


## Features

Generates a random password as per users preference selection. Relative alerts are displayed for invalid inputs.
The password length can vary beween 8-128 characters if user inputs invalid characters or unacceptable length, then user is alerted with the correct message to input the valid length for password.
User needs to select at least one of the character types to include in their password. The character types that can be included in the password are Lowercase characters, Uppercase characters, Numerics and Special Characters.
The password generator will randomly generate the secured password with the length provided by user and the combination character types selected by the user.

## Installation

Visit this <a href="https://akshu3011.github.io/PasswordGenrator/"> page</a> to access the password generator application.

![Here are some of the working snippets](./Assets/Screenshots/PasswordGenerator%2001.png)

## Screenshots 
Here are some tests to verify the Password Generator:

1. When user inputs invalid length
![Here are some of the working snippets](./Assets/Screenshots/PasswordGenerator%2003.png)
![Here are some of the working snippets](./Assets/Screenshots/PasswordGenerator%2004.png)
![Here are some of the working snippets](./Assets/Screenshots/PasswordGenerator%2005.png)
![Here are some of the working snippets](./Assets/Screenshots/PasswordGenerator%2006.png)
![Here are some of the working snippets](./Assets/Screenshots/PasswordGenerator%2007.png)

2. When user provides valid inputs for password generation
![Here are some of the working snippets](./Assets/Screenshots/PasswordGenerator%2008.png)
![Here are some of the working snippets](./Assets/Screenshots/PasswordGenerator%2009.png)
![Here are some of the working snippets](./Assets/Screenshots/PasswordGenerator%2010.png)
![Here are some of the working snippets](./Assets/Screenshots/PasswordGenerator%2011.png)
![Here are some of the working snippets](./Assets/Screenshots/PasswordGenerator%2012.png)
![Here are some of the working snippets](./Assets/Screenshots/PasswordGenerator%2013.png)

## Credits
<li>Akshata Kumbhar, creator</li>
<li>W3Schools, reference for the JS help</li>
<li>List of password special characters, (https://www.owasp.org/index.php/Password_special_characters) from the OWASP Foundation. </li>
