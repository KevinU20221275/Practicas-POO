using System;
using System.Diagnostics;

class Program
{
    static void Main()
    {
        Console.WriteLine("Ingrese el nombre del perro: ");
        string nombrePerro = Console.ReadLine() ?? "Firulais";

        Console.WriteLine("Ingrese la edad del perro: ");
        int edad = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine("Ingrese la raza del perro: ");
        string razaPerro = Console.ReadLine() ?? "Aguacatero";

        Perro perro = new Perro(nombrePerro, edad, razaPerro);
        perro.HacerSonido();
        perro.MostrarInfo();
    }
}