using System;

class Perro : Animal
{
    public string Raza { get; set; }

    public Perro(string nombre, int edad, string raza) 
    : base(nombre, edad)
    {
        Raza = raza;
    }

    public override void HacerSonido()
    {
        Console.WriteLine($"{Nombre} esta ladrando. ¡Guau, guau!");
    }

    public int CalcularEdadPerruna(){
        if (Edad == 1) return 15;
        if (Edad == 2) return 24;
        return 24 + (Edad - 2) * 5;
    }

    public void MostrarInfo(){
        Console.WriteLine($"Nombre: {Nombre}");
        Console.WriteLine($"Edad: {Edad}");
        Console.WriteLine($"Raza: {Raza}");
        HacerSonido();
        Console.WriteLine($"Edad en perruna: {CalcularEdadPerruna()} años");
    }
}