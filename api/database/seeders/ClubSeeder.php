<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Club;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class ClubSeeder extends Seeder
{
  public function run(): void
  {
    // Clubes a cargar en la base de datos
    $clubs = [
      [
        'nombre_institucional' => 'Club Atletico Independiente',
        'nombre' => 'Independiente',
        'escudo' => 'Independiente.webp',
        'fecha_fundacion' => '1930-04-05',
        'estadio_id' => 1,
        'descripcion' => 'Descripcion',
      ],
      [
        'nombre_institucional' => 'Club Social, Cultural y Deportivo Gimnasia y Esgrima',
        'nombre' => 'Gimnasia',
        'escudo' => 'Gimnasia.webp',
        'fecha_fundacion' => '1916-04-18',
        'estadio_id' => 2,
        'descripcion' => 'Descripcion',
      ],
      [
        'nombre_institucional' => 'Club Social y Deportivo 22 de Octubre',
        'nombre' => '22 de Octubre',
        'escudo' => '22Octubre.webp',
        'fecha_fundacion' => '1900-01-01',
        'descripcion' => 'Descripcion',
      ],
      [
        'nombre_institucional' => 'Club Deportivo Alsina',
        'nombre' => 'Alsina',
        'escudo' => 'Alsina.webp',
        'fecha_fundacion' => '1900-01-01',
        'estadio_id' => 4,
        'descripcion' => 'Descripcion',
      ],
      [
        'nombre_institucional' => 'Club Social y Deportivo Ceramica Argentina',
        'nombre' => 'Ceramica',
        'escudo' => 'Ceramica.webp',
        'fecha_fundacion' => '1900-01-01',
        'estadio_id' => 5,
        'descripcion' => 'Descripcion',
      ],
      [
        'nombre_institucional' => 'Club Atletico Ciclon',
        'nombre' => 'Ciclon',
        'escudo' => 'Ciclon.webp',
        'fecha_fundacion' => '1900-01-01',
        'estadio_id' => 6,
        'descripcion' => 'Descripcion',
      ],
      [
        'nombre_institucional' => 'Club Social y Deportivo Colon',
        'nombre' => 'Colon',
        'escudo' => 'Colon.webp',
        'fecha_fundacion' => '1900-01-01',
        'estadio_id' => 7,
        'descripcion' => 'Descripcion',
      ],
      [
        'nombre_institucional' => 'Club Social y Deportivo Huracan',
        'nombre' => 'Huracan',
        'escudo' => 'Huracan.webp',
        'fecha_fundacion' => '1900-01-01',
        'estadio_id' => 8,
        'descripcion' => 'Descripcion',
      ],
      [
        'nombre_institucional' => 'Moquehua',
        'nombre' => 'Moquehua',
        'escudo' => 'Moquehua.webp',
        'fecha_fundacion' => '1900-01-01',
        'estadio_id' => 9,
        'descripcion' => 'Descripcion',
      ],
      [
        'nombre_institucional' => 'Club Once Tigres',
        'nombre' => 'Once Tigres',
        'escudo' => 'OnceTigres.webp',
        'fecha_fundacion' => '1900-01-01',
        'estadio_id' => 10,
        'descripcion' => 'Descripcion',
      ],
      [
        'nombre_institucional' => 'Club Deportivo Pellegrini',
        'nombre' => 'Pellegrini',
        'escudo' => 'Pellegrini.webp',
        'fecha_fundacion' => '1900-01-01',
        'estadio_id' => 11,
        'descripcion' => 'Descripcion',
      ],
      [
        'nombre_institucional' => 'Club San Lorenzo Alberti',
        'nombre' => 'San Lorenzo',
        'escudo' => 'SanLorenzo.webp',
        'fecha_fundacion' => '1900-01-01',
        'estadio_id' => 12,
        'descripcion' => 'Descripcion',
      ],
      [
        'nombre_institucional' => 'Club Deportivo, Social y Cultural Florencio Varela',
        'nombre' => 'Varela',
        'escudo' => 'Varela.webp',
        'fecha_fundacion' => '1900-01-01',
        'estadio_id' => 13,
        'descripcion' => 'Descripcion',
      ],
      [
        'nombre_institucional' => 'Club Atletico Villarino',
        'nombre' => 'Villarino',
        'escudo' => 'Villarino.webp',
        'fecha_fundacion' => '1900-01-01',
        'estadio_id' => 14,
        'descripcion' => 'Descripcion',
      ],
    ];

    foreach ($clubs as $club) {

      // Manejo de escudos
      $rutaOrigen = database_path('seeders/assets/escudos/' . $club['escudo']);
      $rutaDestino = 'escudos/' . $club['escudo'];


      // Copiar imagen a storage/app/public/escudos
      if (File::exists($rutaOrigen)) {
        Storage::disk('public')->put(
          $rutaDestino,
          File::get($rutaOrigen)
        );
      }

      Club::firstOrCreate(
        ['nombre' => $club['nombre']],
        [
          'nombre' => $club['nombre'],
          'nombre_institucional' => $club['nombre_institucional'],
          'slug' => Str::slug($club['nombre']),
          'fecha_fundacion' => $club['fecha_fundacion'],
          'estadio_id' => $club['estadio_id'] ?? null,
          'descripcion' => $club['descripcion'],
          'escudo' => $rutaDestino,
          'activo' => true,
        ]
      );
    }
  }
}
