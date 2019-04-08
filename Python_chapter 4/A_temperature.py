""" /***************************************************************
 OMIS 485         P120 - Ch4     Spring 2019
 
 Programmer: Faisal Alharbi,     Z-ID 1748509

 Date Due:04/07/2018
 
Tutorials from Chapter 4 - Temperature Exercise.
 ***************************************************************/"""
#!/usr/bin/env python3
import temperature as temp

def display_menu ():
    print ("MENU")
    print ("1. Fah. to Cel.")
    print ("2. Cel. to Fah.")
    print ()

def convert_temp():
    option = int (input ("Enter a menu option: "))
    if option == 1:
        f = int (input ("Enter degrees Fahrenheit:  "))
        c = temp.to_celsius (f)
        c = round (c,2)
        print ("Degrees Celsius:", c)
    elif option == 2:
        c = int (input ("Enter degrees Celsius: "))
        f = temp.to_fahrenheit (c)
        f = round (f, 2)
        print ("Degrees Fahrenheit:", f)
    else:
            print ("Enter a valid menu number")

def main ():
    display_menu()
    again = "y"
    while again.lower() == "y":
        convert_temp()
        print ()
        again = input ("Convert another temperature? (Y/N:) ")
    print ("See you!")
    if __name__ == "_main_":
        main()

main()
           
