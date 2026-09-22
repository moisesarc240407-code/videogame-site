import type { LucideIcon } from 'lucide-react';
import {
  FlaskConical,
  Joystick,
  House,
  Disc3,
  Globe,
  Smartphone,
  Glasses,
  Sparkles,
} from 'lucide-react';

export interface EraGame {
  name: string;
  year: string;
  history: string;
  developer: string;
  platform: string;
  genre: string;
}

export interface EraConsole {
  name: string;
  year: string;
  manufacturer: string;
  history: string;
}

export interface Era {
  id: string;
  emoji: string;
  title: string;
  period: string;
  shortTitle: string;
  description: string;
  consoles: EraConsole[];
  icon: LucideIcon;
  color: string;
  accent: string;
  games: EraGame[];
}

export const eras: Era[] = [
  {
    id: 'comienzos',
    emoji: '🧪',
    title: 'Los comienzos',
    period: '1950 – 1970',
    shortTitle: 'Comienzos',
    description:
      'Los primeros videojuegos surgieron como experimentos tecnológicos en universidades y laboratorios. Algunos de los primeros fueron Tennis for Two (1958) y Spacewar! (1962).',
    consoles: [
      {
        name: 'PDP-1 (DEC)',
        year: '1959',
        manufacturer: 'Digital Equipment Corporation',
        history: 'La PDP-1 fue una de las primeras computadoras comerciales con monitor y entrada interactiva. Costaba 120.000 dólares y fue en ella donde se desarrolló Spacewar! en 1962. Solo se fabricaron 53 unidades, pero su impacto fue enorme al demostrar que las computadoras podían usarse para entretenimiento interactivo.',
      },
      {
        name: 'EDSAC',
        year: '1949',
        manufacturer: 'Universidad de Cambridge',
        history: 'La EDSAC fue una de las primeras computadoras con programa almacenado. En 1952 se creó en ella OXO, un juego de tres en raya considerado el primer videojuego con salida gráfica en pantalla. Operaba con válvulas de vacío y ocupaba una sala entera.',
      },
      {
        name: 'TX-0',
        year: '1956',
        manufacturer: 'MIT Lincoln Laboratory',
        history: 'La TX-0 fue una computadora experimental del MIT con transistor, precursora de la PDP-1. En ella se desarrollaron juegos como Tic-Tac-Toe y Mouse in the Maze. Su diseño influyó directamente en la creación de la PDP-1 y en los primeros videojuegos interactivos.',
      },
      {
        name: 'Magnavox Odyssey',
        year: '1972',
        manufacturer: 'Magnavox',
        history: 'La Magnavox Odyssey fue la primera consola de videojuegos doméstica de la historia. Diseñada por Ralph Baer, conocida como el "padre de los videojuegos". Usaba cartuchos intercambiables y se conectaba al televisor. No tenía sonido ni color y usaba overlays de plástico para simular gráficos. Vendió unas 350.000 unidades y sentó las bases de las consolas domésticas.',
      },
    ],
    icon: FlaskConical,
    color: '#00f0ff',
    accent: 'cyan',
    games: [
      {
        name: 'Tennis for Two',
        year: '1958',
        developer: 'William Higinbotham',
        platform: 'Computadora analógica (osciloscopio)',
        genre: 'Deportes / Simulación',
        history:
          'Tennis for Two fue creado por el físico William Higinbotham en el Brookhaven National Laboratory como una demostración interactiva para el público visitante. Usaba un osciloscopio y una computadora analógica para simular un partido de tenis con una pelota que rebotaba sobre una red. Nunca se comercializó, pero se le considera uno de los primeros videojuegos interactivos de la historia. El aparato se desmontó tras la exhibición y su existencia quedó olvidada durante años.',
      },
      {
        name: 'Spacewar!',
        year: '1962',
        developer: 'Steve Russell (MIT)',
        platform: 'PDP-1 (DEC)',
        genre: 'Shooter / Combate espacial',
        history:
          'Spacewar! fue desarrollado por un grupo de estudiantes del MIT liderados por Steve Russell en la computadora PDP-1 de Digital Equipment Corporation. Dos naves espaciales, controladas por distintos jugadores, se enfrentaban en el espacio mientras intentaban dispararse evitando la gravedad de una estrella central. Se distribuía gratuitamente junto con la computadora PDP-1 y se considera el primer videojuego verdaderamente influyente, inspirando a futuros desarrolladores como Nolan Bushnell, fundador de Atari.',
      },
    ],
  },
  {
    id: 'arcades',
    emoji: '🕹️',
    title: 'La llegada de los arcades',
    period: '1970 – 1980',
    shortTitle: 'Arcades',
    description:
      'Los videojuegos empezaron a convertirse en entretenimiento comercial. Las máquinas arcade se hicieron populares y juegos como Pong llevaron los videojuegos a un público más amplio.',
    consoles: [
      {
        name: 'Atari 2600',
        year: '1977',
        manufacturer: 'Atari',
        history: 'La Atari 2600 popularizó los cartuchos intercambiables y llevó los arcade a casa. Con juegos como Space Invaders y Pac-Man, vendió más de 30 millones de unidades. Su control de joystick y botón único definió una generación. La saturación de juegos de baja calidad en esta consola fue una de las causas de la crisis del videojuego de 1983.',
      },
      {
        name: 'Magnavox Odyssey²',
        year: '1978',
        manufacturer: 'Magnavox',
        history: 'La Odyssey² fue la sucesora de la primera Odyssey e incluyó un teclado integrado, algo inusual para la época. Aunque no alcanzó el éxito de la Atari 2600, tuvo popularidad en Europa y Brasil. Sus juegos venían en cartuchos y algunos incluían voz sintetizada con el accesorio The Voice.',
      },
      {
        name: 'Arcade (máquinas recreativas)',
        year: '1972',
        manufacturer: 'Diversos (Atari, Taito, Namco)',
        history: 'Las máquinas arcade fueron el corazón de la industria en los años 70. Estaban en bares, salas recreativas y centros comerciales. Juegos como Pong, Space Invaders y Asteroids generaban colas de jugadores dispuestos a pagar monedas por jugar. En Japón, los salones arcade se convirtieron en un fenómeno cultural que duraría décadas.',
      },
    ],
    icon: Joystick,
    color: '#39ff14',
    accent: 'green',
    games: [
      {
        name: 'Pong',
        year: '1972',
        developer: 'Allan Alcorn (Atari)',
        platform: 'Arcade',
        genre: 'Deportes / Arcade',
        history:
          'Pong fue el primer videojuego comercialmente exitoso de la historia. Creado por Allan Alcorn bajo la dirección de Nolan Bushnell en Atari, consistía en una simulación sencilla de ping-pong donde dos jugadores controlaban paletas verticales para rebotar una pelota. Las máquinas recreativas con Pong se volvieron tan populares que a menudo se atascaban de monedas. Su éxito demostró que los videojuegos podían ser un negocio rentable y marcó el nacimiento de la industria del videojuego comercial.',
      },
      {
        name: 'Space Invaders',
        year: '1978',
        developer: 'Tomohiro Nishikado (Taito)',
        platform: 'Arcade',
        genre: 'Shooter / Disparos',
        history:
          'Space Invaders, creado por Tomohiro Nishikado para Taito, fue el primer gran fenómeno cultural de los videojuegos. El jugador controlaba un cañón que debía destruir oleadas de alienígenas que descendían lentamente hacia la pantalla. Fue tan popular en Japón que se le atribuye una escasez de monedas de 100 yenes. En Japón se popularizó el término "Invader Boom" y el juego demostró que los arcade podían ser una fuerza cultural masiva a nivel mundial.',
      },
      {
        name: 'Asteroids',
        year: '1979',
        developer: 'Lyle Rains y Ed Logg (Atari)',
        platform: 'Arcade',
        genre: 'Shooter / Acción',
        history:
          'Asteroids, desarrollado por Lyle Rains y Ed Logg en Atari, fue uno de los juegos más vendidos de la era arcade. El jugador controlaba una nave triangular que debía destruir asteroides que se fragmentaban en piezas más pequeñas al ser impactados. Utilizaba gráficos vectoriales en lugar de sprites, lo que le daba un aspecto nítido y futurista. Su sistema de high scores persistente y la física de inercia espacial fueron innovadores para la época.',
      },
    ],
  },
  {
    id: 'casa',
    emoji: '🏠',
    title: 'Los videojuegos llegan a casa',
    period: '1980 – 1990',
    shortTitle: 'Consolas',
    description:
      'Las consolas domésticas permitieron jugar desde el televisor. Nintendo, con la NES, ayudó a impulsar de nueva la industria después de la crisis de 1983. Personajes como Mario se volvieron famosos.',
    consoles: [
      {
        name: 'Nintendo (NES)',
        year: '1985',
        manufacturer: 'Nintendo',
        history: 'La NES (Nintendo Entertainment System) revivió la industria tras la crisis de 1983. Con juegos como Super Mario Bros. y The Legend of Zelda, vendió más de 61 millones de unidades. Introdujo el control con cruceta direccional y estableció el modelo de licencias para third parties. En Japón se conocía como Famicom y se lanzó en 1983.',
      },
      {
        name: 'Sega Master System',
        year: '1986',
        manufacturer: 'Sega',
        history: 'La Master System fue la competencia de la NES. Aunque técnicamente era más potente, no logró destronar a Nintendo en Estados Unidos y Japón. Sin embargo, fue extremadamente popular en Brasil y Europa. Incluía juegos integrados como Hang-On y Safari Hunt. Fue la primera consola de Sega en la guerra de formatos contra Nintendo.',
      },
      {
        name: 'Atari 7800',
        year: '1986',
        manufacturer: 'Atari Corporation',
        history: 'La Atari 7800 fue lanzada como sucesora de la 2600, con compatibilidad hacia atrás y mejores gráficos. Sin embargo, llegó tarde y con poco apoyo de third parties frente al dominio de la NES. Atari ya no recuperaría su posición dominante en la industria de las consolas.',
      },
      {
        name: 'Game Boy',
        year: '1989',
        manufacturer: 'Nintendo',
        history: 'La Game Boy revolucionó el juego portátil. Con pantalla monocroma y baterías AA, vendió más de 118 millones de unidades. Su éxito se debió en gran parte a Tetris, incluido como juego de lanzamiento. Game Boy demostró que la portabilidad era más importante que los gráficos y definió el mercado de consolas portátiles durante más de una década.',
      },
    ],
    icon: House,
    color: '#ff2a6d',
    accent: 'pink',
    games: [
      {
        name: 'Pac-Man',
        year: '1980',
        developer: 'Toru Iwatani (Namco)',
        platform: 'Arcade',
        genre: 'Laberinto / Arcade',
        history:
          'Pac-Man fue diseñado por Toru Iwatani en Namco como una alternativa a los juegos de disparos dominantes en la época. La idea del personaje surgió, según Iwatani, al mirar una pizza a la que faltaba una porción. Pac-Man se convirtió en un icono pop global, generando merchandising, series animadas y una canción que llegó al top 10 de las listas musicales. Fue el primer videojuego en atraer a una audiencia más amplia, incluyendo a mujeres, y sigue siendo uno de los personajes más reconocibles de la historia.',
      },
      {
        name: 'Super Mario Bros.',
        year: '1985',
        developer: 'Shigeru Miyamoto (Nintendo)',
        platform: 'NES (Nintendo Entertainment System)',
        genre: 'Plataformas / Aventura',
        history:
          'Super Mario Bros., creado por Shigeru Miyamoto para la consola NES de Nintendo, revivió la industria de los videojuegos tras la crisis de 1983. Mario debía recorrer el Reino Champiñón para rescatar a la Princesa Peach del villano Bowser. Sus precisos controles, el diseño de niveles horizontal con scroll y la icónica música de Koji Kondo establecieron el estándar de los juegos de plataformas. Mario se convirtió en el personaje más famoso de los videojuegos y la franquicia más vendida durante décadas.',
      },
      {
        name: 'The Legend of Zelda',
        year: '1986',
        developer: 'Shigeru Miyamoto y Takashi Tezuka (Nintendo)',
        platform: 'NES',
        genre: 'Aventura / Acción-RPG',
        history:
          'The Legend of Zelda fue uno de los primeros juegos en ofrecer un mundo abierto y no lineal. Creado por Shigeru Miyamoto y Takashi Tezuka, inspirado en las exploraciones infantiles de Miyamoto por los bosques de Japón. Link debía explorar el reino de Hyrule, resolver puzzles en mazmorras y rescatar a la Princesa Zelda. Fue el primer juego en incluir batería interna para guardar el progreso, eliminando la necesidad de passwords. La franquicia se convirtió en una de las más influyentes y queridas de Nintendo.',
      },
      {
        name: 'Tetris',
        year: '1989',
        developer: 'Alexey Pajitnov',
        platform: 'Game Boy (originalmente PC)',
        genre: 'Puzzle',
        history:
          'Tetris fue creado por el programador ruso Alexey Pajitnov en 1984 en la Academia de Ciencias de la Unión Soviética. Las piezas llamadas "tetrominós" caían y el jugador debía encajarlas formando líneas completas. Nintendo obtuvo la licencia y lo incluyó como juego de lanzamiento de la Game Boy en 1989, convirtiéndolo en un éxito mundial. Tetris es uno de los videojuegos más vendidos de todos los tiempos, disponible en más de 50 plataformas, y su melodía basada en una canción folk rusa "Korobeiniki" es universalmente reconocida.',
      },
    ],
  },
  {
    id: '3d',
    emoji: '💿',
    title: 'La revolución del 3D',
    period: '1990 – 2000',
    shortTitle: 'Revolución 3D',
    description:
      'Los videojuegos comenzaron a pasar de los gráficos 2D a mundos tridimensionales. Consolas como PlayStation y Nintendo 64 permitieron crear experiencias mucho más grandes y complejas.',
    consoles: [
      {
        name: 'Sony PlayStation',
        year: '1994',
        manufacturer: 'Sony',
        history: 'La PlayStation fue la primera consola de Sony y marcó el inicio del dominio de la marca. Usaba CD-ROM en lugar de cartuchos, permitiendo juegos más grandes y cinemáticas. Vendió más de 102 millones de unidades y destronó a Nintendo y Sega. Juegos como Final Fantasy VII y Metal Gear Solid la convirtieron en un icono cultural de los 90.',
      },
      {
        name: 'Nintendo 64',
        year: '1996',
        manufacturer: 'Nintendo',
        history: 'La Nintendo 64 fue la última consola de Nintendo en usar cartuchos. Introdujo el joystick analógico y cuatro puertos de control para multijugador. Juegos como Super Mario 64, Ocarina of Time y GoldenEye 007 definieron el juego en 3D. Aunque perdió contra PlayStation en ventas, sus innovaciones en control y diseño 3D influenciaron a toda la industria.',
      },
      {
        name: 'Sega Saturn',
        year: '1994',
        manufacturer: 'Sega',
        history: 'La Saturn fue la respuesta de Sega a la era 3D, pero su arquitectura compleja dificultó el desarrollo de juegos. Se lanzó antes de tiempo en EE.UU. sorprendiendo a desarrolladores y tiendas. Fue superada por la PlayStation y marcó el inicio del declive de Sega en el mercado de consolas.',
      },
      {
        name: 'Game Boy Color',
        year: '1998',
        manufacturer: 'Nintendo',
        history: 'La Game Boy Color añadió color a la portátil de Nintendo y era retrocompatible con los juegos de Game Boy original. Vendió más de 54 millones de unidades combinadas con la Game Boy original. Juegos como Pokémon Rojo y Azul aprovecharon el color y la conectividad por cable de datos, creando un fenómeno mundial.',
      },
      {
        name: 'PC (tarjetas 3D)',
        year: '1996',
        manufacturer: 'Diversos (3dfx, NVIDIA, ATI)',
        history: 'La llegada de tarjetas aceleradoras 3D como la 3dfx Voodoo transformó el PC en una plataforma de juegos competitiva. Juegos como Quake y Unreal aprovecharon la aceleración 3D para ofrecer gráficos imposibles en consolas. La guerra entre 3dfx y NVIDIA definió el mercado de gráficos, del que NVIDIA salió victoriosa y se convirtió en líder absoluto.',
      },
    ],
    icon: Disc3,
    color: '#b026ff',
    accent: 'purple',
    games: [
      {
        name: 'Super Mario 64',
        year: '1996',
        developer: 'Shigeru Miyamoto (Nintendo)',
        platform: 'Nintendo 64',
        genre: 'Plataformas 3D / Aventura',
        history:
          'Super Mario 64 redefinió los videojuegos al llevar a Mario a un mundo tridimensional con libertad de movimiento en todas direcciones. Fue uno de los títulos de lanzamiento de la Nintendo 64 y demostró cómo el control analógico con el joystick 3D permitía una experiencia de plataforma fluida e intuitiva. La cámara controlable y el diseño de mundo abierto influyeron en prácticamente todos los juegos 3D posteriores. Se le considera el juego que enseñó a la industria cómo hacer plataformas en 3D.',
      },
      {
        name: 'Final Fantasy VII',
        year: '1997',
        developer: 'Square (Square Enix)',
        platform: 'PlayStation',
        genre: 'RPG / JRPG',
        history:
          'Final Fantasy VII fue el JRPG que popularizó el género fuera de Japón. Con su historia épica, personajes memorables como Cloud Strife y Sephiroth, y espectaculares cinemáticas en 3D, demostró que los videojuegos podían contar historias tan complejas y emocionales como el cine o la literatura. Su desarrollo fue tan costoso que Square decidió publicarlo en PlayStation en lugar de Nintendo 64, lo que cambió la dinámica de la industria de consolas. Vendió más de 10 millones de copias y sigue siendo considerado uno de los mejores RPG de la historia.',
      },
      {
        name: 'The Legend of Zelda: Ocarina of Time',
        year: '1998',
        developer: 'Shigeru Miyamoto y Eiji Aonuma (Nintendo)',
        platform: 'Nintendo 64',
        genre: 'Aventura / Acción-RPG 3D',
        history:
          'Ocarina of Time es considerado por muchos el mejor videojuego de todos los tiempos. Llevó la fórmula de Zelda a un mundo 3D con una perfección sin precedentes. Innovó con el sistema Z-targeting para el combate, que permitía fijar el objetivo y moverse alrededor de él, una mecánica adoptada por innumerables juegos posteriores. Su mundo de Hyrule, sus mazmorras y su historia de viaje en el tiempo crearon una experiencia inolvidable. Fue el primer juego en recibir un 40/40 perfecto de la revista japonesa Famitsu.',
      },
      {
        name: 'Metal Gear Solid',
        year: '1998',
        developer: 'Hideo Kojima (Konami)',
        platform: 'PlayStation',
        genre: 'Sigilo / Acción',
        history:
          'Metal Gear Solid, dirigido por Hideo Kojima, redefinió la narrativa en los videojuegos. En lugar de la acción directa, el jugador debía usar el sigilo para evitar ser detectado por los enemigos. Sus cinemáticas de calidad cinematográfica, su compleja trama sobre armas nucleares y soldados genéticamente modificados, y el uso creativo del hardware (como el truco de cambiar el puerto del mando para vencer a Psycho Mantis) lo convirtieron en un hito. Kojima demostró que los videojuegos podían ser un medio de expresión artística y narrativa seria.',
      },
    ],
  },
  {
    id: 'internet',
    emoji: '🌐',
    title: 'La era de Internet',
    period: '2000 – 2010',
    shortTitle: 'Internet',
    description:
      'Internet transformó la forma de jugar. Los jugadores podrían competir y colaborar con personas de otros lugares mediante videojuegos online.',
    consoles: [
      {
        name: 'PlayStation 2',
        year: '2000',
        manufacturer: 'Sony',
        history: 'La PS2 es la consola más vendida de la historia con más de 155 millones de unidades. Su lector de DVD fue un factor clave: muchas personas la compraron como reproductor de películas. Su catálogo incluía joyas como GTA: San Andreas, Shadow of the Colossus y God of War. Su dominio fue absoluto durante toda la generación.',
      },
      {
        name: 'Xbox',
        year: '2001',
        manufacturer: 'Microsoft',
        history: 'La Xbox fue la primera consola de Microsoft y la primera en incluir disco duro interno. Con Halo: Combat Evolved, Xbox Live y un hardware potente, estableció a Microsoft como competidor serio en la industria. Su control ergonómico influyó en el diseño de mandos posteriores. Xbox Live sentó las bases del juego online en consolas.',
      },
      {
        name: 'Nintendo GameCube',
        year: '2001',
        manufacturer: 'Nintendo',
        history: 'La GameCube fue la primera consola de Nintendo en usar discos ópticos, aunque en formato propietario mini-DVD. Tenía un diseño compacto con asa. Juegos como Super Smash Bros. Melee y Metroid Prime fueron aclamados. A pesar de su calidad, quedó tercera en ventas frente a PS2 y Xbox, lo que llevó a Nintendo a reinventarse con la Wii.',
      },
      {
        name: 'Xbox 360',
        year: '2005',
        manufacturer: 'Microsoft',
        history: 'La Xbox 360 se lanzó un año antes que sus competidoras y estableció una ventaja enorme. Con Xbox Live perfeccionado, la tienda Xbox Live Arcade y juegos como Halo 3 y Gears of War, dominó el mercado online de consolas. Vendió más de 84 millones de unidades y popularizó los logros y el perfil de jugador unificado.',
      },
      {
        name: 'PlayStation 3',
        year: '2006',
        manufacturer: 'Sony',
        history: 'La PS3 tuvo un lanzamiento difícil por su alto precio y la complejidad del procesador Cell. Sin embargo, con el tiempo acumuló un catálogo excepcional con juegos como The Last of Us, Uncharted y God of War III. Introdujo el Blu-ray como formato de disco. Vendió más de 87 millones de unidades y superó a la Xbox 360 al final de su ciclo.',
      },
      {
        name: 'Nintendo Wii',
        year: '2006',
        manufacturer: 'Nintendo',
        history: 'La Wii revolucionó los controles con movimiento. Su Wiimote atrajo a un público que nunca había jugado videojuegos: abuelos, familias y casuales. Vendió más de 101 millones de unidades y juegos como Wii Sports se convirtieron en fenómenos culturales. Demostró que la innovación era más poderosa que los gráficos de última generación.',
      },
    ],
    icon: Globe,
    color: '#00f0ff',
    accent: 'cyan',
    games: [
      {
        name: 'World of Warcraft',
        year: '2004',
        developer: 'Blizzard Entertainment',
        platform: 'PC',
        genre: 'MMORPG',
        history:
          'World of Warcraft revolucionó los MMO al hacerlos accesibles para el público general. Lanzado por Blizzard en 2004, alcanzó más de 12 millones de suscriptores en su pico. Su mundo persistente de Azeroth, sus mazmorras cooperativas y su equilibrio entre juego individual y social crearon una experiencia adictiva y comunitaria sin precedentes. WoW generó una cultura propia, con eventos virtuales, economía interna y jerga única. Su influencia definió el género MMORPG durante más de una década.',
      },
      {
        name: 'Halo 2',
        year: '2004',
        developer: 'Bungie',
        platform: 'Xbox',
        genre: 'Shooter / FPS',
        history:
          'Halo 2 fue el juego que popularizó el multijugador online en consolas. Su sistema de emparejamiento basado en habilidades y su interfaz de party fueron revolucionarios para Xbox Live. La campaña con el Jefe Maestro y el Inquisidor expandió el universo de Halo con una narrativa épica. Su lanzamiento generó filas de medianoche en tiendas y batió récords de ventas de entretenimiento. Halo 2 demostró que el multijugador online en consolas podía ser tan competitivo y popular como en PC.',
      },
      {
        name: 'Call of Duty 4: Modern Warfare',
        year: '2007',
        developer: 'Infinity Ward',
        platform: 'PC, PlayStation 3, Xbox 360',
        genre: 'Shooter / FPS',
        history:
          'Modern Warfare cambió el panorama de los shooters al abandonar la Segunda Guerra Mundial por un conflicto moderno y relevante. Su campaña cinematográfica y su sistema de progresión con desbloqueo de armas y perks en el multijugador crearon un modelo que casi todos los juegos de disparos posteriores adoptarían. El modo multijugador con killstreaks, prestigio y mapas icónicos generó un fenómeno cultural masivo. Call of Duty se convirtió en la franquicia de videojuegos más vendida de la era moderna.',
      },
      {
        name: 'Minecraft',
        year: '2009',
        developer: 'Markus "Notch" Persson (Mojang)',
        platform: 'PC, consolas, móviles',
        genre: 'Sandbox / Construcción',
        history:
          'Minecraft, creado por Markus "Notch" Persson, comenzó como un proyecto indie y se convirtió en el videojuego más vendido de todos los tiempos. Su concepto de construir y explorar un mundo de bloques generados proceduralmente dio a los jugadores una libertad creativa sin límites. Sin historia lineal ni objetivos obligatorios, Minecraft se convirtió en una plataforma de expresión personal, educación y comunidades creativas. Microsoft compró Mojang por 2.500 millones de dólares en 2014. Minecraft ha sido usado en aulas para enseñar programación, historia y arquitectura.',
      },
    ],
  },
  {
    id: 'todas-partes',
    emoji: '📱',
    title: 'Los videojuegos en todas partes',
    period: '2010 – 2020',
    shortTitle: 'Movilidad',
    description:
      'Los teléfonos inteligentes hicieron que los videojuegos fueran accesibles desde casi cualquier lugar. También crecieron los juegos independientes, los deportes electrónicos, el streaming y las plataformas digitales.',
    consoles: [
      {
        name: 'PlayStation 4',
        year: '2013',
        manufacturer: 'Sony',
        history: 'La PS4 corrigió los errores de la PS3 con una arquitectura sencilla para desarrolladores y un precio agresivo. Vendió más de 117 millones de unidades. Juegos exclusivos como Bloodborne, God of War y Spider-Man la convirtieron en la consola más popular de su generación. Su facilidad de desarrollo atrajo a todas las third parties.',
      },
      {
        name: 'Xbox One',
        year: '2013',
        manufacturer: 'Microsoft',
        history: 'La Xbox One tuvo un lanzamiento polémico por su enfoque en entretenimiento multimedia y políticas DRM restrictivas que tuvo que revertir. A pesar de esto, con Xbox Game Pass y la retrocompatibilidad, Microsoft construyó un ecosistema atractivo. Vendió aproximadamente 50 millones de unidades, menos de la mitad que la PS4.',
      },
      {
        name: 'Nintendo Switch',
        year: '2017',
        manufacturer: 'Nintendo',
        history: 'La Switch combinó consola de sobremesa y portátil en un solo dispositivo. Tras el fracaso comercial de la Wii U, Nintendo apostó por la versatilidad y fue un éxito rotundo. Con juegos como Zelda: Breath of the Wild y Animal Crossing, vendió más de 140 millones de unidades. Su modelo híbrido cambió el concepto de consola para siempre.',
      },
      {
        name: 'Nintendo 3DS',
        year: '2011',
        manufacturer: 'Nintendo',
        history: 'La 3DS introdujo el efecto 3D sin gafas con pantalla autostereoscópica. Tuvo un lanzamiento lento que obligó a Nintendo a reducir el precio drásticamente, pero se recuperó con juegos como Pokémon X/Y y Fire Emblem. Vendió más de 75 millones de unidades y fue la última portátil pura de Nintendo antes de la Switch.',
      },
      {
        name: 'PS Vita',
        year: '2011',
        manufacturer: 'Sony',
        history: 'La PS Vita fue una portátil potente con pantalla OLED y dos joysticks analógicos, pero Sony no la respaldó con suficientes juegos exclusivos. La competencia de los smartphones la marginó. Aun así, se convirtió en una consola de culto para fans de los JRPG y los indies. Sony no ha vuelto a fabricar una consola portátil desde entonces.',
      },
      {
        name: 'Smartphones (iOS / Android)',
        year: '2008',
        manufacturer: 'Apple, Google y otros',
        history: 'Los smartphones crearon el mercado de juego más grande del planeta. La App Store (2008) y Google Play permitieron a cualquier persona publicar juegos. Modelos free-to-play con micropagos generaron ingresos astronómicos. Juegos como Angry Birds, Clash of Clans y Pokémon GO atrajeron a miles de millones de jugadores que nunca se consideraron gamers.',
      },
    ],
    icon: Smartphone,
    color: '#39ff14',
    accent: 'green',
    games: [
      {
        name: 'Angry Birds',
        year: '2009',
        developer: 'Rovio Entertainment',
        platform: 'Móvil (iOS, Android)',
        genre: 'Puzzle / Física',
        history:
          'Angry Birds fue el juego que demostró el potencial comercial de los dispositivos móviles como plataforma de juego. Lanzado por la compañía finlandesa Rovio, su mecánica de lanzar pájaros con una honda para destruir estructuras y eliminar cerdos se volvió extremadamente popular. Angry Birds trascendió el videojuego para convertirse en una franquicia multimedia con películas, juguetes, parques temáticos y series animadas, demostrando que los juegos móviles podían generar imperios de entretenimiento comparables a los de las grandes consolas.',
      },
      {
        name: 'Fortnite',
        year: '2017',
        developer: 'Epic Games',
        platform: 'PC, consolas, móviles',
        genre: 'Battle Royale / Shooter',
        history:
          'Fortnite, de Epic Games, se convirtió en un fenómeno cultural mundial al popularizar el modo Battle Royale donde 100 jugadores compiten hasta quedar uno. Su modelo free-to-play con pases de batalla y cosméticos redefinió la monetización de videojuegos. Fortnite trascendió el juego con conciertos virtuales de artistas como Travis Scott y Ariana Grande, eventos cruzados con Marvel y Star Wars, y una presencia masiva en redes sociales. Se convirtió en un espacio social y de entretenimiento más allá del juego mismo, especialmente para las generaciones más jóvenes.',
      },
      {
        name: 'Among Us',
        year: '2018',
        developer: 'Innersloth',
        platform: 'Móvil, PC',
        genre: 'Social / Deducción',
        history:
          'Among Us, desarrollado por el pequeño estudio Innersloth, fue lanzado en 2018 sin mucho impacto, pero en 2020 se volvió viral durante la pandemia. Su mecánica de deducción social, donde los jugadores deben identificar a los impostores entre la tripulación, se convirtió en un fenómeno de streaming en Twitch y YouTube. Among Us demostró el poder del contenido generado por creadores y de las comunidades para catapultar un juego indie al éxito global. Fue un ejemplo de cómo la cuarentena impulsó ciertos juegos sociales a niveles inesperados.',
      },
      {
        name: 'Genshin Impact',
        year: '2020',
        developer: 'miHoYo',
        platform: 'Móvil, PC, PlayStation',
        genre: 'RPG / Acción / Gacha',
        history:
          'Genshin Impact, de la empresa china miHoYo, sorprendió al mundo con un mundo abierto de calidad comparable a juegos de consola, disponible gratuitamente en móviles. Su modelo gacha, inspirado en el anime japonés, generó ingresos extraordinarios. Genshin Impact demostró que los juegos móviles podían tener la profundidad y producción de un juego AAA de consola. Su éxito consolidó a China como una potencia en el desarrollo de videojuegos globales y popularizó el estilo anime en audiencias occidentales que no eran consumidoras habituales del género.',
      },
    ],
  },
  {
    id: 'nueva-gen',
    emoji: '🥽',
    title: 'La nueva generación',
    period: '2020 – actualidad',
    shortTitle: 'Nueva Gen',
    description:
      'Los videojuegos actuales ofrecen gráficos avanzados, mundos abiertos, experiencias online y tecnologías como la realidad virtual, la realidad aumentada y el juego en la nube.',
    consoles: [
      {
        name: 'PlayStation 5',
        year: '2020',
        manufacturer: 'Sony',
        history: 'La PS5 introdujo un SSD ultrarrápido que eliminó los tiempos de carga y permitió mundos sin interrupciones. Su mando DualSense con feedback háptico y gatillos adaptativos fue una innovación en control. A pesar de problemas de stock en su lanzamiento, vendió más de 50 millones de unidades en sus primeros años. Juegos como Demon\'s Souls y Spider-Man 2 mostraron su potencia.',
      },
      {
        name: 'Xbox Series X/S',
        year: '2020',
        manufacturer: 'Microsoft',
        history: 'La Serie X ofrece máxima potencia mientras la Serie S es una versión económica sin lector de disco. Microsoft apostó por Xbox Game Pass y la compatibilidad con generaciones anteriores como estrategia principal. Aunque vende menos que la PS5, el ecosistema de Game Pass con cientos de juegos por suscripción ha cambiado el modelo de consumo de videojuegos.',
      },
      {
        name: 'PC (RTX)',
        year: '2020',
        manufacturer: 'NVIDIA y diversos',
        history: 'Las tarjetas gráficas NVIDIA RTX introdujeron el ray tracing en tiempo real, simulando la luz de forma realista. El DLSS usó inteligencia artificial para escalar la imagen sin perder calidad. El PC se consolidó como la plataforma más potente y flexible, con tiendas como Steam y Epic Games Store compitiendo por millones de usuarios.',
      },
      {
        name: 'Oculus Quest',
        year: '2019',
        manufacturer: 'Meta (Facebook)',
        history: 'Oculus Quest fue la primera gafas de realidad virtual sin cables ni necesidad de PC. Su accesibilidad y precio razonable popularizaron la VR. Meta invirtió miles de millones en el metaverso y juegos como Beat Saber se volvieron fenómenos. La Quest 2 vendió más de 20 millones de unidades, el dispositivo VR más vendido hasta la fecha.',
      },
      {
        name: 'Steam Deck',
        year: '2022',
        manufacturer: 'Valve',
        history: 'Steam Deck fue la apuesta de Valve por el juego portátil de PC. Con un diseño tipo Switch pero capaz de ejecutar juegos de PC completos, demostró que existía demanda para hardware dedicado al juego portátil más allá de las consolas. Su sistema operativo SteamOS basado en Linux impulsó la compatibilidad de juegos con Linux a través de Proton.',
      },
    ],
    icon: Glasses,
    color: '#ff2a6d',
    accent: 'pink',
    games: [
      {
        name: 'Cyberpunk 2077',
        year: '2020',
        developer: 'CD Projekt Red',
        platform: 'PC, PlayStation, Xbox',
        genre: 'RPG de acción / Mundo abierto',
        history:
          'Cyberpunk 2077, desarrollado por CD Projekt Red, fue uno de los lanzamientos más anticipados de la historia. Ambientado en una megaciudad futurista llamada Night City, prometía un mundo abierto sin precedentes con narrativa ramificada. Su lanzamiento fue problemático: las versiones de consolas antiguas tenían fallos graves que llevaron a su retiro temporal de la PlayStation Store. Tras años de parches y la expansión Phantom Liberty, el juego se redimió y recuperó la confianza del público. Su caso ilustró los peligros del hype desmedido y las promesas excesivas en la industria.',
      },
      {
        name: 'Elden Ring',
        year: '2022',
        developer: 'FromSoftware',
        platform: 'PC, PlayStation, Xbox',
        genre: 'RPG de acción / Souls-like',
        history:
          'Elden Ring, creado por FromSoftware con colaboración narrativa del escritor George R. R. Martin, llevó la fórmula desafiante de los Souls a un mundo abierto. Su vasto mundo de las Tierras Intermedias, lleno de secretos, jefes imponentes y una dificultad implacable, fue aclamado como una obra maestra. Ganó el premio Game of the Year en The Game Awards 2022. Elden Ring demostró que los jugadores seguían dispuestos a aceptar retos difíciles y recompensas no inmediatas, contrarrestando la tendencia de juegos que guían excesivamente al jugador.',
      },
      {
        name: "Baldur's Gate 3",
        year: '2023',
        developer: 'Larian Studios',
        platform: 'PC, PlayStation, Xbox',
        genre: 'RPG / Turn-based',
        history:
          "Baldur's Gate 3, de Larian Studios, revivió el género del RPG basado en turnos y reglas de Dungeons & Dragons con una calidad sin precedentes. Su narrativa ramificada, donde cada decisión del jugador tenía consecuencias reales y visibles, redefinió lo que se esperaba de la narrativa interactiva. El juego permitía soluciones creativas a los problemas, libertad total en el desarrollo del personaje y una cantidad asombrosa de contenido reactivo. Ganó el Game of the Year 2023 y demostró que los RPG tradicionales con combate por turnos seguían siendo comercialmente viables y artisticamente ambiciosos.",
      },
    ],
  },
  {
    id: 'futuro',
    emoji: '🔮',
    title: 'El futuro de los videojuegos',
    period: 'Lo que viene',
    shortTitle: 'Futuro',
    description:
      'La inteligencia artificial, la realidad virtual y otras tecnologías podrían cambiar todavía más la manera en que jugamos, creando experiencias cada vez más interactivas e inmersivas.',
    consoles: [
      {
        name: 'Consolas de nueva generación',
        year: 'Próx.',
        manufacturer: 'Sony, Microsoft, Nintendo',
        history: 'Las futuras consolas prometen integrar inteligencia artificial para generar contenido dinámico, mundos más vastos y carga instantánea. Sony y Microsoft continúan la carrera por la potencia, mientras Nintendo mantiene su enfoque en la innovación. La próxima generación podría fusionar la nube con el hardware local.',
      },
      {
        name: 'Dispositivos VR/AR',
        year: 'Próx.',
        manufacturer: 'Meta, Apple, Sony y otros',
        history: 'La realidad virtual y aumentada prometen revolucionar la inmersión. Apple Vision Pro y las futuras generaciones de Quest buscan fusionar el mundo digital y físico. Los avances en pantallas, seguimiento de manos y campos de visión más amplios acercan la VR a la adopción masiva.',
      },
      {
        name: 'Plataformas en la nube',
        year: 'Próx.',
        manufacturer: 'NVIDIA, Microsoft, Sony y otros',
        history: 'El juego en la nube permite jugar sin hardware potente, transmitiendo el juego desde servidores remotos. Servicios como GeForce Now, Xbox Cloud Gaming y PlayStation Plus Premium eliminan la barrera del hardware. Con la mejora de las redes 5G y la fibra, el juego en la nube podría convertirse en el modelo dominante del futuro.',
      },
      {
        name: 'PCs de alto rendimiento',
        year: 'Próx.',
        manufacturer: 'Diversos',
        history: 'Los PCs de gama alta continúan empujando los límites gráficos con tecnologías como el ray tracing, DLSS y pantallas de alta frecuencia. La modularidad y la capacidad de actualización siguen siendo ventajas únicas. La integración de IA en el rendering promete gráficos fotorrealistas accesibles para más jugadores.',
      },
    ],
    icon: Sparkles,
    color: '#b026ff',
    accent: 'purple',
    games: [],
  },
];
