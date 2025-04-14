using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main()
    {
        Dictionary<string, double> notas = new Dictionary<string, double>()
        {
            { "Kevin", 10 },
            { "Ana", 8.9 },
            { "Luis", 5.6 },
            { "Marta", 9.1 },
            { "Jose", 6.0 },
            { "Lucia", 4.5 }
        };

        // 1. Estudiantes con nota >= 7.0
        var destacados = notas.Where(kv => kv.Value >= 7.0); 

        Console.WriteLine("Estudiantes con nota >= 7.0");
        foreach(var estudiante in destacados)
        {
            Console.WriteLine($"{estudiante.Key} - {estudiante.Value}");
        }

        // 2. Contar aprobados (nota >= 6.0)
        int aprobados = notas.Count(kv => kv.Value >= 6.0);
        Console.WriteLine($"\nCantidad de aprobados: {aprobados}");

        // 3. Verificar si alguien tiene nota perfecta (10.0)
        bool hayPerfecto = notas.Any(kv => kv.Value == 10.0);
        Console.WriteLine("\nAlgun estudiante con nota perfecta? : " + hayPerfecto);

        // 4. Lista de nombres en mayusculas
        var nombresMayusculas = notas.Select(kv => kv.Key.ToUpper()).ToList();
        Console.WriteLine("\nNombres en mayusculas: " + string.Join(", ", nombresMayusculas));

        // 5. Calcular el promedio general
        double promedio = notas.Average(kv => kv.Value);
        Console.WriteLine($"\nPromedio General: {promedio:F2}");
    }
}
