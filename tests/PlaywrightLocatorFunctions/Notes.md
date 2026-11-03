https://senthilsmartqahub.blogspot.com/2025/04/tooltip.html


Playwright Locator Functions
=============================

Used to perform operation on the Web elements.

1. click() - Click function used to click on the element (button, link, checkbox, radiobutton, images, menu items)
            - waits for the element to be visible and enable

2. fill() - used to enter the text into input fields or multilint <textarea> elements
          -  handle multiple lines using template literals (``) or \n (new line)
          - automaticlly waits for the element to be visible and editable
          - its clear and fill the value
          - override the existing value present in the textbox or multiline box
 - or - 
locator.type() - type function is used to type the text character by character in the textbox. 
                 But now it's depecreated it will not overide the existing value.

3. clear () - used to existing value in the textbox or multiline box

4. check() - used to check the checkbox or radio button 
            Supported elements
            <input type = "radio">
            <input type = "checkbox">

5. uncheck() - used to uncheck the checkbox
            <input type = "radio">
            <input type = "checkbox">

6. inputvalue() - used to current value get from the textbox or multiline textbox
            fill() - set a value
            inputvalue() - read a value

7. getattribute() - used to get the attribute vlue from the elements
            href
            src
            value
            type
            placeholder
            id
            class
            disabled

        Syntex : GetAttribute(attribute name) - it will return the respective attribute value

        <tagname attributename = "attributevalue" attributename = "attributevalue">

8. textcontent() - use when you need all text (visible or hidden)
                    used to get the text of the element
    innertext() -  use when you need visible text
    innerHTML() - use when you need with html code.
    

