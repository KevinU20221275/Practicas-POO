using System;

public class Animal
{
    public string Nombre { get; set; }
    public int Edad { get; set; }

    public Animal(string nombre, int edad){
        Nombre = nombre;
        Edad = edad;
    }

    public virtual void HacerSonido(){
        Console.WriteLine("El animal hace un sonido.");
    }
}