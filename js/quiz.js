/* === ULTIMATE GAMIFIED QUIZ DATABASE === */
const QUESTION_DATABASE = {
  // TOPIC 1: Tactics & Strategy
  tactics: {
    casual: [
      { q: "What formation features four defenders, four midfielders, and two strikers?",
        opts: ["4-3-3", "3-5-2", "4-4-2", "4-2-3-1"],
        correct: 2, fact: "The classic 4-4-2. Rigid, balanced, and the foundation of modern tactical history." },
      { q: "In tactical football, what does the abbreviation 'VAR' stand for?",
        opts: ["Video Assistant Referee", "Virtual Assistant Ref", "Video Angle Review", "Velocity Action Reply"],
        correct: 0, fact: "VAR (Video Assistant Referee) was introduced to review clear and obvious errors." },
      { q: "Which position is primarily responsible for preventing the opposing team from scoring?",
        opts: ["Striker", "Winger", "Goalkeeper", "Midfielder"],
        correct: 2, fact: "The goalkeeper is the final line of defense. The ultimate shot stopper." },
      { q: "What is a 'clean sheet' in football?",
        opts: ["A team conceding zero goals", "A brand new pitch", "A match with zero yellow cards", "A perfectly flat pass"],
        correct: 0, fact: "A clean sheet means keeping a shut-out and conceding zero goals." },
      { q: "What is the main duty of a striker?",
        opts: ["Zonal defending", "Scoring goals", "Intercepting passes", "Taking throw-ins"],
        correct: 1, fact: "The striker occupies the central attacking channel to put the ball in the net." },
      { q: "Which position is commonly referred to as the 'number 9' in a traditional team lineup?",
        opts: ["Goalkeeper", "Central Striker", "Winger", "Center-Back"],
        correct: 1, fact: "The 'Number 9' is the classic focal point of the attack, responsible for scoring goals." },
      { q: "What is an 'assist' in football?",
        opts: ["Preventing a goal by the goalie", "The final pass leading to a goal", "A tactical foul to halt a counter", "A substitution in the second half"],
        correct: 1, fact: "An assist is credited to the player who makes the final pass before a teammate scores." },
      { q: "What does it mean when a player is caught 'offside'?",
        opts: ["Crossing the touchline", "Touching with your hand", "Past the last defender", "Entering the box early"],
        correct: 2, fact: "The offside rule prevents attackers from simply waiting near the opponent's goal for long passes." },
      { q: "How many halves is a standard professional football match divided into?",
        opts: ["Two halves", "Three periods", "Four quarters", "One long block"],
        correct: 0, fact: "A standard match has two halves of 45 minutes each, totaling 90 minutes of regulation time." },
      { q: "What is a 'counter-attack'?",
        opts: ["Defending deep inside the penalty box", "Transitioning fast when winning the ball", "Fouling the opponent's main playmaker", "Slowing the game down using possession"],
        correct: 1, fact: "Counter-attacks exploit the space left behind by opponents who have pushed forward to attack." }
    ],
    analyst: [
      { q: "What tactical role describes a deep midfielder who drops between center-backs to build play?",
        opts: ["Inside Forward", "Regista / Deep-Lying Playmaker", "Target Man", "Box-to-Box Engine"],
        correct: 1, fact: "A Regista orchestrates the team's tempo from a deep position, bypassing defensive blocks." },
      { q: "Which coach famously popularized the high-intensity pressing tactic known as 'Gegenpressing'?",
        opts: ["Pep Guardiola", "Jürgen Klopp", "José Mourinho", "Carlo Ancelotti"],
        correct: 1, fact: "Jürgen Klopp refined Gegenpressing—demanding players immediately win the ball back upon losing it." },
      { q: "What is the primary objective of a 'low block' defensive setup?",
        opts: ["Pressing the opponent's keeper", "Denying space in the defensive third", "Maximized offside traps", "Retaining 70% possession"],
        correct: 1, fact: "A low block compresses the space between lines in the defensive third, forcing opponents wide." },
      { q: "What space-occupying zone is between the opponent's midfield and defensive lines?",
        opts: ["The outer wing channels", "The intermediate pockets", "The central penalty box", "The outer technical area"],
        correct: 1, fact: "Finding 'the pockets' or playing 'between the lines' is critical to breaking organized defense." },
      { q: "What tactical term describes a winger who cuts inside onto their stronger opposite foot?",
        opts: ["Inverted Winger", "Wing-Back", "Traditional Winger", "False Nine"],
        correct: 0, fact: "An Inverted Winger (e.g. Robben, Salah) cuts inside to shoot or create central overloads." },
      { q: "What tactical shift occurs when a team switches from a 4-3-3 to a 3-4-3 in possession?",
        opts: ["A central striker drops deep to defend", "Fullbacks push high to join the midfield", "The goalie acts as an extra midfielder", "The wingers play as central midfielders"],
        correct: 1, fact: "Positional rotations allow teams to create passing overloads in possession while retaining defensive cover." },
      { q: "What is the primary role of a 'Box-to-Box' midfielder?",
        opts: ["Staying deep in their own penalty box", "Operating strictly on the touchlines", "Running all pitch to defend and attack", "Taking all corner kicks and penalties"],
        correct: 2, fact: "Box-to-box midfielders (e.g. Yaya Touré, Steven Gerrard) require elite stamina to dominate both boxes." },
      { q: "In modern tactical analysis, what is the 'half-space' (Zwischenraum)?",
        opts: ["The area outside the playing field", "The zones between wings and center", "The penalty spot and goal mouth area", "The bench area for substitutes"],
        correct: 1, fact: "The half-space is a critical attacking zone where players can create diagonal passing angles to break defenses." },
      { q: "What is 'rest defense' (Restverteidigung)?",
        opts: ["Keeping defenders rested on the bench", "Positioning players to prevent counters", "Defending with low physical intensity", "Zonal marking on corner kick plays"],
        correct: 1, fact: "Rest defense ensures a team is structured to instantly handle transitions the moment they lose the ball." },
      { q: "What tactical term describes a forward who drops deep into midfield to draw defenders out of position?",
        opts: ["Target Man", "Poacher", "False Nine", "Inverted Winger"],
        correct: 2, fact: "The False Nine (famous under Pep Guardiola with Messi) creates space behind for wingers to exploit." }
    ],
    obsessive: [
      { q: "Pep Guardiola's 'Juego de Posición' splits the pitch into how many tactical zones?",
        opts: ["12 zones", "15 zones", "20 zones", "24 zones"],
        correct: 2, fact: "20 zones. Divided longitudinally and vertically into half-spaces to dictate positioning." },
      { q: "Which Italian tactician popularized the zonal-marking 1-3-4-2 'zona mista' system in the late 1970s?",
        opts: ["Arrigo Sacchi", "Giovanni Trapattoni", "Marcello Lippi", "Helenio Herrera"],
        correct: 1, fact: "Giovanni Trapattoni. A hybrid system combining zonal marking and rigid catenaccio man-marking." },
      { q: "In tactical game theory, what is the term for a pressing setup where every player marks their direct counterpart?",
        opts: ["Shadow pressing", "Man-oriented pressing", "Zonal containment", "Rest defense"],
        correct: 1, fact: "Man-oriented pressing locks onto direct counterparts, creating high-intensity 1v1 duels." },
      { q: "Who authored the seminal tactical football book 'Inverting the Pyramid'?",
        opts: ["Michael Cox", "Jonathan Wilson", "Martí Perarnau", "Uli Hesse"],
        correct: 1, fact: "Jonathan Wilson. The ultimate history of football tactics and formation evolutions." },
      { q: "What specific center-back role, popularized by Franz Beckenbauer, is allowed to roam forward to initiate attacks?",
        opts: ["Libero / Sweeper", "Stopper", "Ball-playing center-back", "Anchor-man"],
        correct: 0, fact: "The Libero. A free defender behind the line who steps into midfield to build numerical superiority." },
      { q: "Which coach is credited with inventing the 'WM' formation in the late 1920s?",
        opts: ["Herbert Chapman", "Hugo Meisl", "Vittorio Pozzo", "Jimmy Hogan"],
        correct: 0, fact: "Herbert Chapman introduced the 3-2-2-3 (WM) formation at Arsenal to counter the revised offside rule of 1925." },
      { q: "What specific tactical concept does Marcelo Bielsa's 'Tercer Hombre' (Third Man) focus on?",
        opts: ["Deploying a system of three centerbacks", "Instructing a defender to draw fouls", "Using an extra pass to find a free run", "Assigning a man-marker to the referee"],
        correct: 2, fact: "The Third Man concept uses a vertical pass to draw pressure, opening a third player to receive a lay-off facing forward." },
      { q: "Which tactical structure, pioneered by Viktor Maslov at Dynamo Kyiv, is considered the ancestor of modern pressing?",
        opts: ["Strict catenaccio man-marking system", "Zonal marking with aggressive pressing", "Classic Metodo system with two halves", "The quick-passing Danubian structure"],
        correct: 1, fact: "Viktor Maslov is widely regarded as the father of modern high-intensity zonal pressing and the 4-4-2." },
      { q: "What does the tactical metric 'PPDA' measure in football analytics?",
        opts: ["Passes Per Defensive Action (pressing intensity)", "Penalty Point Danger Area", "Player Position Distance Average", "Possession Percentage in Defensive Area"],
        correct: 0, fact: "PPDA (Passes Per Defensive Action) measures pressing efficiency by counting opponent passes allowed before a defensive action is made." },
      { q: "In Valeriy Lobanovskyi's highly mathematical tactical system, what was the primary unit of optimization?",
        opts: ["Individual player physical duels", "Sub-groups of two or three players", "The central striker's expected goals", "The goalkeeper's long pass accuracy"],
        correct: 1, fact: "Lobanovskyi treated football as a system of 22 moving parts, optimizing coalitions (pairs/trios) rather than single individuals." }
    ]
  },
  
  // TOPIC 2: UCL & La Liga
  ucl: {
    casual: [
      { q: "Which club has won the most UEFA Champions League titles?",
        opts: ["FC Barcelona", "AC Milan", "Real Madrid", "Bayern Munich"],
        correct: 2, fact: "Real Madrid. With 15 titles, they dominate European football history." },
      { q: "How many Champions League titles did Lionel Messi win with Barcelona?",
        opts: ["2", "3", "4", "5"],
        correct: 2, fact: "Messi won 4 UCL trophies with Barca (2006, 2009, 2011, 2015)." },
      { q: "Which Spanish club plays its home games at the Santiago Bernabéu?",
        opts: ["Atlético Madrid", "Real Madrid", "Sevilla", "Valencia"],
        correct: 1, fact: "The Santiago Bernabéu, home of Real Madrid since 1947." },
      { q: "What is the nickname of FC Barcelona?",
        opts: ["Los Blancos", "La Real", "Blaugrana", "Colchoneros"],
        correct: 2, fact: "Blaugrana, referring to the blue and deep red colors of their kit." },
      { q: "Who is La Liga's all-time top scorer?",
        opts: ["Cristiano Ronaldo", "Raúl", "Lionel Messi", "Telmo Zarra"],
        correct: 2, fact: "Lionel Messi leads with an astonishing 474 goals in Spanish top-flight history." },
      { q: "Which club won the UEFA Champions League three times in a row between 2016 and 2018?",
        opts: ["FC Barcelona", "Real Madrid", "Bayern Munich", "Juventus"],
        correct: 1, fact: "Real Madrid under Zinedine Zidane completed a historic three-peat in 2016, 2017, and 2018." },
      { q: "Which famous stadium is the home ground of FC Barcelona?",
        opts: ["Wanda Metropolitano", "Camp Nou", "San Siro", "Mestalla"],
        correct: 1, fact: "Camp Nou, one of the most iconic and largest stadiums in world football." },
      { q: "Which Portuguese superstar is the all-time top goalscorer in the UEFA Champions League?",
        opts: ["Luis Figo", "Eusébio", "Cristiano Ronaldo", "Bruno Fernandes"],
        correct: 2, fact: "Cristiano Ronaldo is the undisputed king of UCL scoring with 140 goals." },
      { q: "What is the name of the annual derby match between Real Madrid and FC Barcelona?",
        opts: ["The Milan Derby", "El Clásico", "The Old Firm", "Le Classique"],
        correct: 1, fact: "El Clásico is one of the most watched club football matches in the world." },
      { q: "Which German club did Real Madrid defeat to win the 2024 UEFA Champions League Final?",
        opts: ["Bayern Munich", "Bayer Leverkusen", "Borussia Dortmund", "RB Leipzig"],
        correct: 2, fact: "Real Madrid beat Borussia Dortmund 2-0 at Wembley to claim their 15th European crown." }
    ],
    analyst: [
      { q: "Who scored Barcelona's opening goal in the 2011 UCL Final against Manchester United?",
        opts: ["Lionel Messi", "David Villa", "Pedro Rodriguez", "Andres Iniesta"],
        correct: 2, fact: "Pedro scored the opener in Wembley. Barca went on to win 3-1 in tactical masterclass style." },
      { q: "Which team did Real Madrid defeat in the 2014 Champions League final to claim 'La Décima'?",
        opts: ["Bayern Munich", "Juventus", "Atlético Madrid", "Borussia Dortmund"],
        correct: 2, fact: "Atlético Madrid. Deprived of victory in the 93rd minute in Lisbon." },
      { q: "Which player famously scored a stunning bicycle kick in the 2018 UCL final for Real Madrid?",
        opts: ["Cristiano Ronaldo", "Karim Benzema", "Gareth Bale", "Luka Modrić"],
        correct: 2, fact: "Gareth Bale. Coming off the bench to score one of the greatest goals in UCL final history." },
      { q: "Which club won La Liga in the 2020-21 season, breaking the Barca/Real duopoly?",
        opts: ["Sevilla", "Villarreal", "Real Sociedad", "Atlético Madrid"],
        correct: 3, fact: "Diego Simeone's Atlético Madrid claimed a hard-fought title on the final matchday." },
      { q: "Who is the all-time top assist provider in UEFA Champions League history?",
        opts: ["Lionel Messi", "Cristiano Ronaldo", "Ryan Giggs", "Xavi Hernandez"],
        correct: 1, fact: "Cristiano Ronaldo. Alongside being top scorer, he has the most assists (42)." },
      { q: "Which manager coached FC Barcelona to their famous 2008-09 treble in his debut senior season?",
        opts: ["Frank Rijkaard", "Pep Guardiola", "Luis Enrique", "Tito Vilanova"],
        correct: 1, fact: "Pep Guardiola stepped up from Barca B to guide the first team to a historic sextuple in 2009." },
      { q: "Which club broke the Barca-Real dominance by winning La Liga in 2013-14 under Diego Simeone?",
        opts: ["Valencia", "Sevilla", "Athletic Bilbao", "Atlético Madrid"],
        correct: 3, fact: "Diego Simeone's Atlético Madrid claimed the title on the final day with a 1-1 draw at the Camp Nou." },
      { q: "Who scored the winning goal for Bayern Munich against Borussia Dortmund in the 2013 UCL Final?",
        opts: ["Thomas Müller", "Arjen Robben", "Bastian Schweinsteiger", "Franck Ribéry"],
        correct: 1, fact: "Arjen Robben broke through in the 89th minute to banish his past final heartbreaks." },
      { q: "Which midfielder famously won five UCL trophies with Real Madrid before transferring to Manchester United in 2022?",
        opts: ["Luka Modrić", "Toni Kroos", "Casemiro", "Isco"],
        correct: 2, fact: "Casemiro was the defensive anchor of Real Madrid's legendary mid-2010s midfield trio." },
      { q: "Which French forward won the Ballon d'Or in 2022 after a legendary UCL campaign with Real Madrid?",
        opts: ["Kylian Mbappé", "Karim Benzema", "Antoine Griezmann", "Olivier Giroud"],
        correct: 1, fact: "Karim Benzema scored back-to-back hat-tricks in the knockouts (vs PSG and Chelsea) in an all-time great run." }
    ],
    obsessive: [
      { q: "In the iconic 2005 Champions League final ('Miracle of Istanbul'), who scored Milan's third goal in the first half?",
        opts: ["Paolo Maldini", "Andriy Shevchenko", "Hernán Crespo", "Kaká"],
        correct: 2, fact: "Hernán Crespo chipped Dudek beautifully to put Milan 3-0 up before Liverpool's historic comeback." },
      { q: "In what season did Barcelona win their first-ever European Cup under Johan Cruyff?",
        opts: ["1988-89", "1990-91", "1991-92", "1993-94"],
        correct: 2, fact: "1991-92. Ronald Koeman's free kick at Wembley beat Sampdoria to secure the trophy." },
      { q: "Who is the youngest player to score a hat-trick in Champions League history?",
        opts: ["Wayne Rooney", "Erling Haaland", "Raúl", "Rodrygo Goes"],
        correct: 2, fact: "Raúl scored a hat-trick against Ferencváros in 1995 at just 18 years and 113 days." },
      { q: "Which referee officiated the controversial 2009 UCL semi-final between Chelsea and Barcelona?",
        opts: ["Howard Webb", "Tom Henning Øvrebø", "Mark Clattenburg", "Cüneyt Çakır"],
        correct: 1, fact: "Tom Henning Øvrebø. The night Stamford Bridge erupted in absolute disbelief." },
      { q: "Who scored the dramatic 93rd-minute equalizer for Real Madrid in the 2014 Champions League final?",
        opts: ["Cristiano Ronaldo", "Sergio Ramos", "Gareth Bale", "Luka Modrić"],
        correct: 1, fact: "Sergio Ramos. A bullet header off Modrić's corner at 92:48. Absolute heartbreak for Atlético." },
      { q: "In the 2009 Champions League semi-final against Chelsea, who scored Barca's dramatic late equalizer?",
        opts: ["Lionel Messi", "Andrés Iniesta", "Samuel Eto'o", "Xavi"],
        correct: 1, fact: "Andrés Iniesta's sublime outside-of-the-box strike in the 93rd minute sent Barca to the final." },
      { q: "Who was the manager of Valencia when they reached back-to-back Champions League finals in 2000 and 2001?",
        opts: ["Claudio Ranieri", "Héctor Cúper", "Rafael Benítez", "Quique Sánchez Flores"],
        correct: 1, fact: "Héctor Cúper guided Valencia to the finals, falling to Real Madrid and Bayern Munich respectively." },
      { q: "Which player scored the fastest goal in Champions League history (10.12 seconds)?",
        opts: ["Roy Makaay", "Jonas", "Gilberto Silva", "Alessandro Del Piero"],
        correct: 0, fact: "Roy Makaay scored for Bayern Munich against Real Madrid in 2007 just 10.12 seconds after kickoff." },
      { q: "Which La Liga club is unique for its policy of only fielding players born or trained in the Basque Country?",
        opts: ["Real Sociedad", "Athletic Bilbao", "Deportivo Alavés", "SD Eibar"],
        correct: 1, fact: "Athletic Club de Bilbao has maintained its strict Basque-only policy since 1912." },
      { q: "Who is the only manager to have won the UEFA Champions League five times?",
        opts: ["Bob Paisley", "Zinedine Zidane", "Pep Guardiola", "Carlo Ancelotti"],
        correct: 3, fact: "Carlo Ancelotti has won the UCL 5 times: twice with AC Milan (2003, 2007) and three times with Real Madrid (2014, 2022, 2024)." }
    ]
  },
  
  // TOPIC 3: Moroccan Football
  morocco: {
    casual: [
      { q: "What is the nickname of the Moroccan national football team?",
        opts: ["Desert Foxes", "Super Eagles", "Atlas Lions", "Pharaohs"],
        correct: 2, fact: "The Atlas Lions (Les Lions de l'Atlas), representing strength and national pride." },
      { q: "Which country hosted the 2022 FIFA World Cup where Morocco reached the semi-finals?",
        opts: ["Russia", "Brazil", "Qatar", "South Africa"],
        correct: 2, fact: "Qatar 2022. The first World Cup held in the Arab world." },
      { q: "Who is the tactical manager who led Morocco to the semi-finals of the 2022 World Cup?",
        opts: ["Hervé Renard", "Vahid Halilhodžić", "Walid Regragui", "Badou Zaki"],
        correct: 2, fact: "Walid Regragui. Appointed just months before, he engineered a defensive masterpiece." },
      { q: "Which Moroccan star plays as a right-back for Paris Saint-Germain?",
        opts: ["Achraf Hakimi", "Hakim Ziyech", "Sofyan Amrabat", "Nayef Aguerd"],
        correct: 0, fact: "Achraf Hakimi. A world-class right-back and former PSG Academy trainee." },
      { q: "What are the colors of the Moroccan national football team?",
        opts: ["Blue and White", "Red and Green", "Yellow and Green", "Black and Gold"],
        correct: 1, fact: "Red and Green, matching the colors of the Kingdom of Morocco flag." },
      { q: "In the 2022 FIFA World Cup, which European giant did Morocco defeat in the Round of 16?",
        opts: ["France", "Spain", "Germany", "Belgium"],
        correct: 1, fact: "Morocco knocked out Spain in a penalty shootout after a heroic defensive display (0-0)." },
      { q: "Which Moroccan player is famous for his elite wing play and long-range free kicks for Galatasaray?",
        opts: ["Sofiane Boufal", "Hakim Ziyech", "Amine Harit", "Abde Ezzalzouli"],
        correct: 1, fact: "Hakim Ziyech, a crucial creative spark and leader of the Atlas Lions' golden generation." },
      { q: "Which city's derby between Wydad and Raja is considered one of the most passionate in world football?",
        opts: ["Marrakech", "Rabat", "Casablanca", "Fez"],
        correct: 2, fact: "The Casablanca Derby features some of the most spectacular stadium choreographies (Tifos) in the world." },
      { q: "What is the capacity range of the major Stade Mohammed V in Casablanca?",
        opts: ["Around 20,000", "Around 45,000 - 67,000", "Exactly 10,000", "Over 120,000"],
        correct: 1, fact: "Stade Mohammed V is the legendary cauldron home to both Wydad and Raja." },
      { q: "Which country will co-host the 2030 FIFA World Cup alongside Morocco and Portugal?",
        opts: ["Spain", "Italy", "Saudi Arabia", "France"],
        correct: 0, fact: "Morocco, Portugal, and Spain will co-host the historic centenary 2030 FIFA World Cup." }
    ],
    analyst: [
      { q: "Morocco became the first African nation to qualify for the World Cup knockout stage in which year?",
        opts: ["1970", "1986", "1994", "1998"],
        correct: 1, fact: "Mexico 1986. Morocco topped a group containing England, Poland, and Portugal." },
      { q: "Which goalkeeper was the hero in the penalty shootout against Spain in the 2022 World Cup?",
        opts: ["Yassine Bounou", "Munir Mohamedi", "Anas Zniti", "Khalid Sinouh"],
        correct: 0, fact: "Yassine Bounou (Bono). He stopped 3 penalty kicks in a historic shootout victory." },
      { q: "Who scored Morocco's historic winning goal against Portugal in the 2022 World Cup quarter-final?",
        opts: ["Sofiane Boufal", "Youssef En-Nesyri", "Zakaria Aboukhlal", "Hakim Ziyech"],
        correct: 1, fact: "Youssef En-Nesyri. A soaring, gravity-defying header in the 42nd minute." },
      { q: "Which club from Casablanca won the CAF Champions League in 2022?",
        opts: ["Raja Casablanca", "Wydad Casablanca", "FAR Rabat", "Maghreb Fès"],
        correct: 1, fact: "Wydad Casablanca. Defeating Al Ahly 2-0 under manager Walid Regragui." },
      { q: "In which year did Morocco win their first Africa Cup of Nations (AFCON) title?",
        opts: ["1970", "1976", "1988", "2004"],
        correct: 1, fact: "Morocco won their first AFCON title in 1976 in Ethiopia under manager Gheorghe Mărdărescu." },
      { q: "Which tactician managed the Moroccan national team during their highly memorable 2018 World Cup campaign in Russia?",
        opts: ["Badou Zaki", "Hervé Renard", "Henri Michel", "Vahid Halilhodžić"],
        correct: 1, fact: "Hervé Renard rebuilt the team's defensive cohesion, leading them to their first World Cup in 20 years." },
      { q: "Morocco topped their 1986 World Cup group by defeating which European team 3-1?",
        opts: ["England", "Poland", "Portugal", "West Germany"],
        correct: 2, fact: "Morocco beat Portugal 3-1 with a stunning brace from Abderrazak Khairi to qualify first in their group." },
      { q: "Which Moroccan midfielder gained global praise for his absolute work-rate and recovery stats in Qatar 2022?",
        opts: ["Azzedine Ounahi", "Sofyan Amrabat", "Selim Amallah", "Abdelhamid Sabiri"],
        correct: 1, fact: "Sofyan Amrabat covered ground relentlessly, famously running down Kylian Mbappé in the semi-final." },
      { q: "Which domestic Moroccan league club is associated with the Royal Armed Forces?",
        opts: ["Raja Casablanca", "Wydad Casablanca", "FAR Rabat (AS FAR)", "RS Berkane"],
        correct: 2, fact: "Association Sportive des Forces Armées Royales (AS FAR) is one of the most successful clubs in Morocco." },
      { q: "Who was the creative midfield revelation of Qatar 2022, praised by Luis Enrique as 'Madre mía, ¿de dónde sale este muchacho?'",
        opts: ["Sofyan Amrabat", "Azzedine Ounahi", "Hakim Ziyech", "Zakaria Aboukhlal"],
        correct: 1, fact: "Azzedine Ounahi dazzled with his press-resistant dribbling and supreme technical elegance." }
    ],
    obsessive: [
      { q: "Who is Morocco's all-time top goalscorer in international football?",
        opts: ["Marouane Chamakh", "Ahmed Faras", "Youssef El-Arabi", "Salaheddine Bassir"],
        correct: 1, fact: "Ahmed Faras. Scoring 36 goals, he also won the African Footballer of the Year in 1975." },
      { q: "Which Moroccan legend won the African Footballer of the Year award in 1998?",
        opts: ["Ezzaki Badou", "Mustapha Hadji", "Noureddine Naybet", "Aziz Bouderbala"],
        correct: 1, fact: "Mustapha Hadji. Famed for his overhead kick against Egypt and spectacular 1998 World Cup run." },
      { q: "What was the score when Morocco defeated Scotland in the 1998 World Cup group stage?",
        opts: ["1-0", "2-1", "3-0", "4-0"],
        correct: 2, fact: "A beautiful 3-0 victory in Saint-Étienne, but Norway's late win over Brazil cruelly knocked Morocco out." },
      { q: "Who was Morocco's starting goalkeeper and captain in the 1986 World Cup in Mexico?",
        opts: ["Badou Zaki", "Allal Ben Kassou", "Khalid Fouhami", "Nadir Lamyaghri"],
        correct: 0, fact: "Badou Zaki. His incredible displays won him the African Footballer of the Year in 1986." },
      { q: "In the 2022 World Cup, who assisted Youssef En-Nesyri's header against Portugal?",
        opts: ["Achraf Hakimi", "Yahia Attiyat Allah", "Selim Amallah", "Sofyan Amrabat"],
        correct: 1, fact: "Yahia Attiyat Allah delivered a perfect cross from the left wing." },
      { q: "In which country did Morocco win the African Nations Championship (CHAN) for the first time in 2018?",
        opts: ["Cameroon", "Morocco (Host)", "Rwanda", "Algeria"],
        correct: 1, fact: "Morocco hosted and won the 2018 CHAN tournament, defeating Nigeria 4-0 in the final." },
      { q: "Which orange-shirted club from eastern Morocco won the CAF Confederation Cup in 2020 and 2022?",
        opts: ["FAR Rabat", "RS Berkane", "Wydad Casablanca", "Moghreb Tétouan"],
        correct: 1, fact: "Renaissance Sportive de Berkane (RS Berkane) won the CAF Confederation Cup in both 2020 and 2022." },
      { q: "Who was the coach of the Moroccan team during the 1986 World Cup in Mexico where they reached the Round of 16?",
        opts: ["José Faria", "Gheorghe Mărdărescu", "Just Fontaine", "Henri Michel"],
        correct: 0, fact: "José Faria, the Brazilian tactician who spent years developing Moroccan club and national football." },
      { q: "Which Moroccan forward scored a legendary overhead kick against Egypt in the 1998 Africa Cup of Nations?",
        opts: ["Mustapha Hadji", "Salaheddine Bassir", "Camacho", "Youssef Chippo"],
        correct: 0, fact: "Mustapha Hadji scored an iconic overhead bicycle kick in the 90th minute to beat Egypt 1-0." },
      { q: "Who is the legendary Moroccan striker who became the top scorer in La Liga's second division with Elche before starring for Deportivo La Coruña?",
        opts: ["Mustapha Hadji", "Salaheddine Bassir", "Noureddine Naybet", "Ahmed Bahja"],
        correct: 1, fact: "Salaheddine Bassir had a highly successful European spell, scoring clinical goals for Deportivo and Lille." }
    ]
  }
};

/* === AVATAR IMAGES === */
const FACE = {
  smirk:    'assets/images/face-smirk.webp',
  neutral:  'assets/images/face-neutral.webp',
  crossed:  'assets/images/face-crossed.webp',
  angry:    'assets/images/face-angry.webp',
  shocked:  'assets/images/face-shocked.webp',
  sad:      'assets/images/face-sad.webp',
  laughing: 'assets/images/face-laughing.webp',
  cool:     'assets/images/face-cool.webp',
};

/* === COMMENTARY DATA === */
const reactions = [
  { face: FACE.smirk,   text: '"Go ahead. I dare you."' },
  { face: FACE.neutral, text: '"Lucky. Don\'t get comfortable."' },
  { face: FACE.crossed, text: '"Okay... you know a thing or two."' },
  { face: FACE.crossed, text: '"This is getting annoying."' },
  { face: FACE.angry,   text: '"Fine. You\'re decent."' },
  { face: FACE.angry,   text: '"This cannot be happening."' },
  { face: FACE.shocked, text: '"Who ARE you?!"' },
  { face: FACE.sad,     text: '"I hate this. Respect."' },
  { face: FACE.sad,     text: '"You\'re embarrassing me."' },
  { face: FACE.shocked, text: '"You\'re on my level. Barely."' }
];

const badReactions = [
  { face: FACE.laughing, text: '"I expected this from you."' },
  { face: FACE.cool,     text: '"This is too easy."' },
  { face: FACE.cool,     text: '"You\'re proving my point."' },
  { face: FACE.neutral,  text: '"Keep going... please."' },
  { face: FACE.laughing, text: '"Basic football knowledge. Come on."' }
];

/* === STATE VARIABLES === */
let selectedTopic = "tactics";
let selectedDifficulty = "analyst";
let questions = [];
let currentQ = 0;
let score = 0;
let answered = [];
let userAnswers = [];
let streakCounter = 0;

// All 9 quiz combinations for campaign tracking
const ALL_QUIZZES = [
  { topic: 'tactics', diff: 'casual', topicName: 'Tactics & Strategy', diffName: 'Casual Fan' },
  { topic: 'tactics', diff: 'analyst', topicName: 'Tactics & Strategy', diffName: 'Tactical Analyst' },
  { topic: 'tactics', diff: 'obsessive', topicName: 'Tactics & Strategy', diffName: 'Football Obsessive' },
  { topic: 'ucl', diff: 'casual', topicName: 'UCL & La Liga', diffName: 'Casual Fan' },
  { topic: 'ucl', diff: 'analyst', topicName: 'UCL & La Liga', diffName: 'Tactical Analyst' },
  { topic: 'ucl', diff: 'obsessive', topicName: 'UCL & La Liga', diffName: 'Football Obsessive' },
  { topic: 'morocco', diff: 'casual', topicName: 'Moroccan Football', diffName: 'Casual Fan' },
  { topic: 'morocco', diff: 'analyst', topicName: 'Moroccan Football', diffName: 'Tactical Analyst' },
  { topic: 'morocco', diff: 'obsessive', topicName: 'Moroccan Football', diffName: 'Football Obsessive' }
];

// Shot Clock Variables
const SHOT_CLOCK_LIMIT = 15;
let shotClockTimeLeft = SHOT_CLOCK_LIMIT;
let shotClockInterval = null;
let shotClockTween = null;
let totalTimeRemaining = 0; // Tracks Vision/Crisis stats
let totalQuestionsCount = 0;

/* === SELECTION SCREEN PARAMETERS === */
function selectQuizParam(type, value) {
  const containerId = type === 'topic' ? 'topic-selector-group' : 'diff-selector-group';
  const container = document.getElementById(containerId);
  if (!container) return;

  const buttons = container.querySelectorAll('.selection-option-btn');
  buttons.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-val') === value);
  });

  if (type === 'topic') {
    selectedTopic = value;
  } else {
    selectedDifficulty = value;
  }

  // Update visuals based on new parameters
  updateCompletedParametersVisuals();
}

/* === AUDIO SYSTEM === */
let _quizCtx = null;
function _qctx() {
  const muted = typeof isMuted !== 'undefined' ? isMuted : (localStorage.getItem('portfolio-muted') === 'true');
  if (muted) return null;
  if (!_quizCtx) _quizCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (_quizCtx.state === 'suspended') _quizCtx.resume();
  return _quizCtx;
}

let crowdSource = null;
let crowdFilter = null;
let crowdGain = null;

function startStadiumAmbiance() {
  const muted = typeof isMuted !== 'undefined' ? isMuted : (localStorage.getItem('portfolio-muted') === 'true');
  if (muted) return;
  try {
    const ctx = _qctx();
    if (!ctx) return;
    if (crowdSource) return; 

    // Procedural White Noise Buffer
    const bufferSize = 4 * ctx.sampleRate;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    crowdSource = ctx.createBufferSource();
    crowdSource.buffer = noiseBuffer;
    crowdSource.loop = true;

    crowdFilter = ctx.createBiquadFilter();
    crowdFilter.type = 'lowpass';
    crowdFilter.frequency.setValueAtTime(220, ctx.currentTime);
    crowdFilter.Q.setValueAtTime(3, ctx.currentTime);

    crowdGain = ctx.createGain();
    crowdGain.gain.setValueAtTime(0.08, ctx.currentTime);

    crowdSource.connect(crowdFilter);
    crowdFilter.connect(crowdGain);
    crowdGain.connect(ctx.destination);

    crowdSource.start();
  } catch (e) {
    console.error("Stadium background audio failed:", e);
  }
}

function stopStadiumAmbiance() {
  try {
    if (crowdSource) {
      crowdSource.stop();
      crowdSource.disconnect();
    }
  } catch (e) {}
  crowdSource = null;
  crowdFilter = null;
  crowdGain = null;
}

function swellCrowd(isCorrect, isStreak = false) {
  const muted = typeof isMuted !== 'undefined' ? isMuted : (localStorage.getItem('portfolio-muted') === 'true');
  if (muted || !crowdFilter || !crowdGain) return;
  try {
    const ctx = _qctx();
    if (!ctx) return;
    const t = ctx.currentTime;
    if (isCorrect) {
      crowdFilter.frequency.cancelScheduledValues(t);
      crowdFilter.frequency.setValueAtTime(crowdFilter.frequency.value, t);
      crowdFilter.frequency.exponentialRampToValueAtTime(isStreak ? 950 : 750, t + 0.3);
      crowdFilter.frequency.exponentialRampToValueAtTime(220, t + 2.2);

      crowdGain.gain.cancelScheduledValues(t);
      crowdGain.gain.setValueAtTime(crowdGain.gain.value, t);
      crowdGain.gain.linearRampToValueAtTime(isStreak ? 0.36 : 0.24, t + 0.2);
      crowdGain.gain.exponentialRampToValueAtTime(0.08, t + 2.2);
    } else {
      crowdFilter.frequency.cancelScheduledValues(t);
      crowdFilter.frequency.setValueAtTime(crowdFilter.frequency.value, t);
      crowdFilter.frequency.linearRampToValueAtTime(140, t + 0.35);
      crowdFilter.frequency.linearRampToValueAtTime(220, t + 1.8);

      crowdGain.gain.cancelScheduledValues(t);
      crowdGain.gain.setValueAtTime(crowdGain.gain.value, t);
      crowdGain.gain.linearRampToValueAtTime(0.18, t + 0.15);
      crowdGain.gain.exponentialRampToValueAtTime(0.08, t + 1.8);
    }
  } catch (e) {}
}

function playCorrect() {
  const muted = typeof isMuted !== 'undefined' ? isMuted : (localStorage.getItem('portfolio-muted') === 'true');
  if (muted) return;
  try {
    const ctx = _qctx();
    if (!ctx) return;
    const osc = ctx.createOscillator(), gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1320, ctx.currentTime + 0.12);
    gain.gain.setValueAtTime(0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
    osc.start(); osc.stop(ctx.currentTime + 0.35);
  } catch (e) {}
}

function playWrong() {
  const muted = typeof isMuted !== 'undefined' ? isMuted : (localStorage.getItem('portfolio-muted') === 'true');
  if (muted) return;
  try {
    const ctx = _qctx();
    if (!ctx) return;
    const osc = ctx.createOscillator(), gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(240, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(90, ctx.currentTime + 0.25);
    gain.gain.setValueAtTime(0.18, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
    osc.start(); osc.stop(ctx.currentTime + 0.35);
  } catch (e) {}
}

/* === GAME PLAY ENGINE === */
function startSelectedQuiz() {
  // Grab questions
  const sourceList = QUESTION_DATABASE[selectedTopic][selectedDifficulty];
  questions = [...sourceList];
  totalQuestionsCount = questions.length;

  // Build steps
  const steps = document.getElementById('progress-steps');
  if (steps) {
    steps.innerHTML = '';
    questions.forEach((_, i) => {
      const s = document.createElement('div');
      s.className = 'progress-step'; s.id = 'ps-' + i;
      s.textContent = i + 1;
      steps.appendChild(s);
    });
  }

  // Switch UI Screens
  const selScreen = document.getElementById('selection-screen');
  const quizCont = document.getElementById('quiz-container');
  if (selScreen && quizCont) {
    if (typeof gsap !== 'undefined') {
      gsap.to(selScreen, { opacity: 0, duration: 0.35, onComplete: () => {
        selScreen.style.display = 'none';
        quizCont.style.display = 'block';
        gsap.fromTo(quizCont, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.45 });
        
        // Show Shot clock
        const shotClockCont = document.getElementById('shot-clock-container');
        if (shotClockCont) shotClockCont.style.display = 'block';

        renderQuestion(0);
      }});
    } else {
      selScreen.style.display = 'none';
      quizCont.style.display = 'block';
      renderQuestion(0);
    }
  }
}

/* === RENDER QUESTION === */
function renderQuestion(idx) {
  const q = questions[idx];
  const area = document.getElementById('questions-list');
  const isLast = idx === questions.length - 1;

  const card = document.createElement('div');
  card.className = 'question-card';
  card.id = 'current-card';
  card.innerHTML = `
    <div class="q-number">Question ${idx + 1} <span style="color:var(--muted)">/ ${questions.length}</span></div>
    <div class="q-text">${q.q}</div>
    <div class="q-options" id="current-opts">
      ${q.opts.map((o, j) => `<button class="q-option" onclick="answer(${j})">${o}</button>`).join('')}
    </div>
    <div class="q-feedback" id="current-feedback"></div>
    <button class="next-btn" id="next-btn" onclick="nextQuestion()">
      ${isLast ? 'See Results' : 'Next Question'} &rarr;
    </button>
  `;

  area.innerHTML = '';
  area.appendChild(card);
  
  if (typeof gsap !== 'undefined') {
    gsap.fromTo(card,
      { x: 150, y: -10, rotation: 8, opacity: 0 },
      { x: 0, y: 0, rotation: 0, opacity: 1, duration: 0.48, ease: 'back.out(1.2)' }
    );
  }

  // Shot clock kickoff
  startShotClock();
}

/* === SHOT CLOCK TIMERS === */
function startShotClock() {
  clearInterval(shotClockInterval);
  if (shotClockTween) shotClockTween.kill();

  shotClockTimeLeft = SHOT_CLOCK_LIMIT;
  const timeEl = document.getElementById('shot-clock-time');
  const barEl = document.getElementById('shot-clock-bar');

  if (timeEl) timeEl.textContent = shotClockTimeLeft + 's';
  if (barEl) {
    gsap.set(barEl, { scaleX: 1, backgroundColor: 'var(--gold)' });
    shotClockTween = gsap.to(barEl, {
      scaleX: 0,
      duration: SHOT_CLOCK_LIMIT,
      ease: 'none'
    });
  }

  shotClockInterval = setInterval(() => {
    shotClockTimeLeft--;
    if (timeEl) timeEl.textContent = shotClockTimeLeft + 's';
    
    // Change color under pressure
    if (shotClockTimeLeft <= 5 && barEl) {
      gsap.to(barEl, { backgroundColor: 'var(--red)', duration: 0.3 });
    }

    if (shotClockTimeLeft <= 0) {
      clearInterval(shotClockInterval);
      timeOutAnswer();
    }
  }, 1000);
}

function stopShotClock() {
  clearInterval(shotClockInterval);
  if (shotClockTween) {
    shotClockTween.pause();
  }
}

/* === ANSWER SELECTION === */
function answer(optIdx) {
  if (answered.includes(currentQ)) return;
  answered.push(currentQ);
  userAnswers[currentQ] = optIdx;

  stopShotClock();
  
  // Track remaining clock time for vision score
  totalTimeRemaining += shotClockTimeLeft;

  if (!crowdSource) {
    startStadiumAmbiance();
  }

  const q = questions[currentQ];
  const card = document.getElementById('current-card');
  const opts = card.querySelectorAll('.q-option');
  const fb = document.getElementById('current-feedback');
  const btn = document.getElementById('next-btn');

  opts.forEach(o => o.disabled = true);

  const isCorrect = optIdx === q.correct;
  
  if (isCorrect) {
    score++;
    streakCounter++;
  } else {
    streakCounter = 0;
  }

  opts[q.correct].classList.add('correct');
  if (!isCorrect) opts[optIdx].classList.add('wrong');

  fb.textContent = q.fact;
  fb.style.color = isCorrect ? 'var(--success)' : 'var(--red)';
  fb.classList.add('fb-visible');

  card.classList.add(isCorrect ? 'flash-correct' : 'flash-wrong');
  setTimeout(() => card.classList.remove('flash-correct', 'flash-wrong'), 600);
  
  isCorrect ? playCorrect() : playWrong();
  
  // Audio swell & Streak indicator
  const hasStreak = streakCounter >= 3;
  swellCrowd(isCorrect, hasStreak);

  const streakBadge = document.getElementById('streak-badge');
  const streakNum = document.getElementById('streak-num');
  if (streakBadge && streakNum) {
    if (hasStreak) {
      streakNum.textContent = streakCounter;
      streakBadge.style.display = 'block';
    } else {
      streakBadge.style.display = 'none';
    }
  }

  const step = document.getElementById('ps-' + currentQ);
  if (step) step.classList.add(isCorrect ? 'correct' : 'wrong');

  updateReaction(isCorrect);
  updateScore();

  btn.classList.add('btn-visible');
}

/* === TIMEOUT ACTION === */
function timeOutAnswer() {
  if (answered.includes(currentQ)) return;
  answered.push(currentQ);
  userAnswers[currentQ] = -1; // -1 represents timeout

  streakCounter = 0;

  if (!crowdSource) {
    startStadiumAmbiance();
  }

  const q = questions[currentQ];
  const card = document.getElementById('current-card');
  const opts = card.querySelectorAll('.q-option');
  const fb = document.getElementById('current-feedback');
  const btn = document.getElementById('next-btn');

  opts.forEach(o => o.disabled = true);

  opts[q.correct].classList.add('correct');
  
  fb.textContent = "TIMEOUT! " + q.fact;
  fb.style.color = 'var(--red)';
  fb.classList.add('fb-visible');

  card.classList.add('flash-wrong');
  setTimeout(() => card.classList.remove('flash-wrong'), 600);
  
  playWrong();
  swellCrowd(false, false);

  const streakBadge = document.getElementById('streak-badge');
  if (streakBadge) streakBadge.style.display = 'none';

  const step = document.getElementById('ps-' + currentQ);
  if (step) step.classList.add('wrong');

  // Hard timeout reaction
  const faceEl = document.getElementById('reaction-emoji');
  const text = document.getElementById('reaction-text');
  if (faceEl && text) {
    const img = faceEl.querySelector('img');
    if (img) img.src = FACE.angry;
    text.textContent = '"Too slow! Keep up with the pace of the game."';
    
    gsap.killTweensOf(faceEl);
    gsap.fromTo(faceEl,
      { x: -8, rotation: -6 },
      { x: 8, rotation: 6, duration: 0.08, repeat: 5, yoyo: true, ease: 'power1.inOut',
        onComplete: () => gsap.set(faceEl, { x: 0, y: 0, rotation: 0 })
      }
    );
  }

  updateScore();
  btn.classList.add('btn-visible');
}

/* === NEXT QUESTION === */
function nextQuestion() {
  const card = document.getElementById('current-card');
  if (typeof gsap !== 'undefined') {
    card.classList.add('card-exit');
    gsap.to(card, {
      x: -150,
      y: 30,
      rotation: -12,
      opacity: 0,
      duration: 0.35,
      ease: 'power2.in',
      onComplete: () => { 
        currentQ++; 
        currentQ >= questions.length ? showFinal() : renderQuestion(currentQ); 
      }
    });
  } else {
    card.classList.add('card-exit');
    setTimeout(() => { 
      currentQ++; 
      currentQ >= questions.length ? showFinal() : renderQuestion(currentQ); 
    }, 280);
  }
}

/* === DYNAMIC REACTION === */
function updateReaction(isCorrect) {
  const pct = score / Math.max(answered.length, 1);
  const faceEl = document.getElementById('reaction-emoji');
  const text = document.getElementById('reaction-text');
  if (!faceEl || !text) return;

  let r;
  if (isCorrect) {
    r = pct >= 0.7
      ? reactions[Math.min(Math.floor(score), reactions.length - 1)]
      : { face: FACE.cool, text: '"Good goal. Now do it again."' };
  } else {
    r = badReactions[Math.min(answered.length - score, badReactions.length - 1)];
  }

  const img = faceEl.querySelector('img');
  if (img) img.src = r.face;

  gsap.fromTo(text,
    { opacity: 0, y: 5 },
    { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
  );
  text.textContent = r.text;

  gsap.killTweensOf(faceEl);
  if (isCorrect) {
    gsap.fromTo(faceEl,
      { y: 0, scale: 1, rotation: 0 },
      { y: -22, scale: 1.15, rotation: 5, duration: 0.25, yoyo: true, repeat: 1, ease: 'power2.out' }
    );
  } else {
    gsap.fromTo(faceEl,
      { x: -8, rotation: -6, scale: 1 },
      { x: 8, rotation: 6, scale: 1.05, duration: 0.08, repeat: 5, yoyo: true, ease: 'power1.inOut',
        onComplete: () => gsap.set(faceEl, { x: 0, y: 0, rotation: 0, scale: 1 })
      }
    );
  }
}

function updateScore() {
  const display = document.getElementById('score-display');
  if (display) display.textContent = score + ' / ' + answered.length;
}

/* === SHOW FINAL & PERSONALIZED TACTICAL AUDIT === */
function showFinal() {
  stopShotClock();
  document.getElementById('quiz-container').style.display = 'none';
  
  const shotClockCont = document.getElementById('shot-clock-container');
  if (shotClockCont) shotClockCont.style.display = 'none';

  const fs = document.getElementById('final-screen');
  fs.style.display = 'block';
  
  const pct = score / questions.length;

  let title, sub;
  if (pct === 1) { 
    title = 'Perfect. Who sent you?'; 
    sub = "You're on Othmane's level. Officially."; 
  } else if (pct >= 0.8) { 
    title = 'Impressive. Barely.'; 
    sub = score + '/' + questions.length + '. Solid. Now go away.'; 
  } else if (pct >= 0.6) { 
    title = 'Not bad. Not great.'; 
    sub = score + '/' + questions.length + '. Watch more Serie A.'; 
  } else if (pct >= 0.4) { 
    title = 'Bro...'; 
    sub = score + '/' + questions.length + '. Highlights-only viewer.'; 
  } else { 
    title = 'This was painful to watch.'; 
    sub = score + '/' + questions.length + '. Delete your football opinions.'; 
  }

  const scoreNumEl = document.getElementById('final-score-num');
  const finalTitleEl = document.getElementById('final-title');
  const finalSubEl = document.getElementById('final-subtitle');

  if (scoreNumEl) scoreNumEl.innerHTML = score + '<span>/' + questions.length + '</span>';
  if (finalTitleEl) finalTitleEl.textContent = title;
  if (finalSubEl) finalSubEl.textContent = sub;

  // --- DYNAMIC SCOUTING REPORT SCORING (FOOTBALL MANAGER STYLE) ---
  const nameInputWrapper = document.getElementById('scout-name-input-wrapper');
  if (nameInputWrapper) {
    nameInputWrapper.style.display = 'block';
    document.getElementById('scout-name-input').value = ''; // Reset input field
  }

  const auditCard = document.getElementById('tactical-audit-card');
  if (auditCard) {
    auditCard.style.display = 'block';
    
    // 1. Calculate VIS (Vision / Lecture du jeu)
    let calculatedVision = 45;
    if (selectedTopic === 'tactics') {
      calculatedVision = Math.round(pct * 100);
    } else {
      const difficultyBase = selectedDifficulty === 'obsessive' ? 80 : (selectedDifficulty === 'analyst' ? 60 : 40);
      calculatedVision = Math.round(difficultyBase + (pct - 0.5) * 30);
    }
    calculatedVision = Math.min(Math.max(calculatedVision, 15), 99);

    // 2. Calculate CUL (Football Culture)
    let calculatedCulture = 45;
    if (selectedTopic === 'morocco' || selectedTopic === 'ucl') {
      calculatedCulture = Math.round(pct * 100);
    } else {
      const difficultyBase = selectedDifficulty === 'obsessive' ? 80 : (selectedDifficulty === 'analyst' ? 60 : 40);
      calculatedCulture = Math.round(difficultyBase + (pct - 0.5) * 30);
    }
    calculatedCulture = Math.min(Math.max(calculatedCulture, 15), 99);

    // 3. Calculate SPD (Decision Speed)
    const avgTimeRemaining = (totalTimeRemaining / totalQuestionsCount);
    let calculatedSpeed = Math.round((avgTimeRemaining / SHOT_CLOCK_LIMIT) * 100);
    calculatedSpeed = Math.min(Math.max(calculatedSpeed, 15), 99);

    // Render Stats values
    document.getElementById('stat-num-vis').textContent = calculatedVision;
    document.getElementById('stat-num-cul').textContent = calculatedCulture;
    document.getElementById('stat-num-spd').textContent = calculatedSpeed;

    // 4. Determine Scout Class
    let classRating = "CLASS C";
    if (score >= 9) classRating = "CLASS A+";
    else if (score >= 7) classRating = "CLASS A";
    else if (score >= 5) classRating = "CLASS B";
    else if (score >= 3) classRating = "CLASS C";
    else classRating = "CLASS D";
    
    document.getElementById('scout-class-rating').textContent = classRating;
    document.getElementById('scout-card-name').textContent = 'GUEST SCOUT';

    // 5. Generate Scout Verdict Report
    let verdictStr = "";
    if (score === 10) {
      verdictStr = "Absolute football elite. Analyst displays flawless tactical understanding, peerless memory, and instant reaction speeds. Suitable for elite-level first-team recruitment departments.";
    } else if (score >= 8) {
      verdictStr = "High tactical profile. Exhibits excellent vision and strong footballing culture under pressure. Highly competent analyst with minor optimization areas in speed or specific regional trivia.";
    } else if (score >= 5) {
      verdictStr = "Capable analyst. Shows solid foundations in match mechanics and soccer history. Capable of sound diagnostics, though prone to occasional decision errors under shot-clock pressure.";
    } else if (score >= 3) {
      verdictStr = "Casual observer profile. Possesses basic game understanding, but struggles with advanced tactical concepts and high-pressure situations. Recommend further study of modern tactical theories.";
    } else {
      verdictStr = "Critical analysis gap. Relies heavily on surface-level highlights. High panic index under shot-clock pressure. Highly recommended to re-examine fundamental football structures.";
    }
    
    document.getElementById('audit-desc').textContent = verdictStr;

    // 6. Draw dynamic SVG Radar Chart
    drawRadarChart(calculatedVision, calculatedCulture, calculatedSpeed);

    // 7. Badges
    const strengthBadge = document.getElementById('audit-badge-strength');
    const weaknessBadge = document.getElementById('audit-badge-weakness');

    let strengthStr = "Strength: Front-Post Specialist";
    if (score === 0) {
      strengthStr = "Strength: Pure Unshakable Optimism";
    } else if (selectedTopic === 'tactics') {
      strengthStr = "Strength: Transition Specialist";
    } else if (selectedTopic === 'ucl') {
      strengthStr = "Strength: European Cup Historian";
    } else if (selectedTopic === 'morocco') {
      strengthStr = "Strength: Atlas Lions Fanatic";
    }

    let weaknessStr = "Weakness: Casual Memory";
    const hadTimeouts = userAnswers.includes(-1);
    if (score === 0) {
      weaknessStr = "Weakness: Blindly Guessing / No Correct Answers";
    } else if (hadTimeouts) {
      weaknessStr = "Weakness: Panics Under Shot-Clock Pressures";
    } else if (pct < 0.5) {
      weaknessStr = "Weakness: Surface-level analysis";
    } else {
      weaknessStr = "Weakness: Spends too much time arguing on Twitter";
    }

    if (strengthBadge) strengthBadge.textContent = strengthStr;
    if (weaknessBadge) weaknessBadge.textContent = weaknessStr;
  }

  // Breakdown List
  const list = document.getElementById('breakdown-list');
  if (list) {
    list.innerHTML = '';
    questions.forEach((q, i) => {
      const isCorrect = userAnswers[i] === q.correct;
      const isTimeout = userAnswers[i] === -1;
      const item = document.createElement('div');
      item.className = 'breakdown-item ' + (isCorrect ? 'correct' : 'wrong');
      
      let markText = "OK";
      if (isTimeout) markText = "CLOCK";
      else if (!isCorrect) markText = "X";

      item.innerHTML = `
        <span class="breakdown-mark">${markText}</span>
        <span class="breakdown-qnum">Q${i + 1}</span>
        <span class="breakdown-qlabel">${q.q}</span>
      `;
      list.appendChild(item);
    });
  }

  // --- PROGRESS TRACKING & CHALLENGE ENGINE ---
  let completed = [];
  try {
    completed = JSON.parse(localStorage.getItem('completed_quizzes') || '[]');
  } catch(e) {}

  const currentQuizKey = selectedTopic + '_' + selectedDifficulty;
  if (!completed.includes(currentQuizKey)) {
    completed.push(currentQuizKey);
    localStorage.setItem('completed_quizzes', JSON.stringify(completed));
  }

  // Update selection screen visuals immediately
  updateCompletedParametersVisuals();

  // Find remaining unplayed combinations
  const uncompleted = ALL_QUIZZES.filter(q => !completed.includes(q.topic + '_' + q.diff));

  const nextBox = document.getElementById('next-challenge-box');
  const allBox = document.getElementById('all-completed-box');

  if (uncompleted.length > 0) {
    if (nextBox) {
      const nextQuiz = uncompleted[0];
      const titleEl = document.getElementById('next-challenge-title');
      const btnEl = document.getElementById('next-challenge-btn');
      if (titleEl && btnEl) {
        titleEl.textContent = `${nextQuiz.topicName} (${nextQuiz.diffName})`;
        btnEl.setAttribute('onclick', `playNextSuggestedQuiz('${nextQuiz.topic}', '${nextQuiz.diff}')`);
      }
      nextBox.style.display = 'block';
    }
    if (allBox) allBox.style.display = 'none';
  } else {
    if (nextBox) nextBox.style.display = 'none';
    if (allBox) allBox.style.display = 'block';
  }
}

/* === RESTART === */
function restartQuiz() {
  score = 0; answered = []; userAnswers = []; currentQ = 0; streakCounter = 0;
  totalTimeRemaining = 0;
  
  // Hide final, show selection
  document.getElementById('final-screen').style.display = 'none';
  document.getElementById('selection-screen').style.display = 'block';
  
  const steps = document.getElementById('progress-steps');
  if (steps) steps.innerHTML = '';
  
  const faceEl = document.getElementById('reaction-emoji');
  const bubbleText = document.getElementById('reaction-text');
  const scoreDisp = document.getElementById('score-display');
  const streakBadge = document.getElementById('streak-badge');

  if (faceEl) faceEl.querySelector('img').src = FACE.smirk;
  if (bubbleText) bubbleText.textContent = '"Go ahead. I dare you."';
  if (scoreDisp) scoreDisp.textContent = '0 / 0';
  if (streakBadge) streakBadge.style.display = 'none';

  stopStadiumAmbiance();

  // Refresh selection menu completion indicators
  updateCompletedParametersVisuals();
}

/* === PLAY SUGGESTED NEXT QUIZ === */
function playNextSuggestedQuiz(topic, diff) {
  selectedTopic = topic;
  selectedDifficulty = diff;

  // Highlight selection buttons so selection state is updated visually
  selectQuizParam('topic', topic);
  selectQuizParam('difficulty', diff);

  // Restart state
  score = 0; answered = []; userAnswers = []; currentQ = 0; streakCounter = 0;
  totalTimeRemaining = 0;
  
  document.getElementById('final-screen').style.display = 'none';
  
  stopStadiumAmbiance();
  startStadiumAmbiance();

  const steps = document.getElementById('progress-steps');
  if (steps) steps.innerHTML = '';
  
  const faceEl = document.getElementById('reaction-emoji');
  const bubbleText = document.getElementById('reaction-text');
  const scoreDisp = document.getElementById('score-display');
  const streakBadge = document.getElementById('streak-badge');

  if (faceEl) faceEl.querySelector('img').src = FACE.smirk;
  if (bubbleText) bubbleText.textContent = '"Go ahead. I dare you."';
  if (scoreDisp) scoreDisp.textContent = '0 / 0';
  if (streakBadge) streakBadge.style.display = 'none';

  startSelectedQuiz();
}

/* === RESET PROGRESS === */
function resetQuizProgress() {
  localStorage.removeItem('completed_quizzes');
  
  const allCompletedBox = document.getElementById('all-completed-box');
  if (allCompletedBox) allCompletedBox.style.display = 'none';

  // Visually remove completed markers on parameters
  updateCompletedParametersVisuals();

  restartQuiz();
}

/* === UPDATE SELECTION VISUALS WITH COMPLETION INDICATORS === */
function updateCompletedParametersVisuals() {
  let completed = [];
  try {
    completed = JSON.parse(localStorage.getItem('completed_quizzes') || '[]');
  } catch(e) {}

  // 1. Update Topic Buttons
  const topicButtons = document.querySelectorAll('#topic-selector-group .selection-option-btn');
  topicButtons.forEach(btn => {
    const topic = btn.getAttribute('data-val');
    const completedCount = ['casual', 'analyst', 'obsessive'].filter(d => completed.includes(topic + '_' + d)).length;
    
    let indicator = btn.querySelector('.completed-indicator');
    if (!indicator) {
      indicator = document.createElement('span');
      indicator.className = 'completed-indicator';
      indicator.style.position = 'absolute';
      indicator.style.top = '10px';
      indicator.style.right = '12px';
      indicator.style.fontSize = '0.7rem';
      indicator.style.fontFamily = 'monospace';
      indicator.style.fontWeight = '700';
      btn.style.position = 'relative';
      btn.appendChild(indicator);
    }
    
    if (completedCount === 3) {
      indicator.textContent = 'ALL DONE ✓';
      indicator.style.color = 'var(--success)';
    } else if (completedCount > 0) {
      indicator.textContent = `${completedCount}/3 DONE`;
      indicator.style.color = 'var(--gold)';
    } else {
      indicator.textContent = '';
    }
  });

  // 2. Update Difficulty Buttons based on currently selected topic
  const diffButtons = document.querySelectorAll('#diff-selector-group .selection-option-btn');
  diffButtons.forEach(btn => {
    const diff = btn.getAttribute('data-val');
    const isCompleted = completed.includes(selectedTopic + '_' + diff);
    
    let indicator = btn.querySelector('.completed-indicator');
    if (!indicator) {
      indicator = document.createElement('span');
      indicator.className = 'completed-indicator';
      indicator.style.position = 'absolute';
      indicator.style.top = '10px';
      indicator.style.right = '12px';
      indicator.style.fontSize = '0.7rem';
      indicator.style.fontFamily = 'monospace';
      indicator.style.fontWeight = '700';
      btn.style.position = 'relative';
      btn.appendChild(indicator);
    }

    if (isCompleted) {
      indicator.textContent = 'COMPLETED ✓';
      indicator.style.color = 'var(--success)';
    } else {
      indicator.textContent = '';
    }
  });

  // 3. Update Start Button text if current combo is already completed
  const startBtn = document.querySelector('.start-quiz-btn');
  if (startBtn) {
    const currentQuizKey = selectedTopic + '_' + selectedDifficulty;
    if (completed.includes(currentQuizKey)) {
      startBtn.innerHTML = 'Replay Completed Audit &orarr;';
      startBtn.style.border = '1px solid var(--success)';
    } else {
      startBtn.innerHTML = 'Lock Selection & Start Kickoff &rarr;';
      startBtn.style.border = '1px solid var(--gold)';
    }
  }
}

/* === DYNAMIC SVG RADAR CHART DRAWING === */
function drawRadarChart(vis, cul, spd) {
  const container = document.getElementById('radar-chart-container');
  if (!container) return;

  const center = 100;
  const maxRadius = 65; // Leave space for labels
  
  // Ratios (0 to 1)
  const rVis = vis / 100;
  const rCul = cul / 100;
  const rSpd = spd / 100;

  // Angles
  const aVis = -Math.PI / 2;
  const aCul = aVis + (2 * Math.PI / 3);
  const aSpd = aVis - (2 * Math.PI / 3);

  // Background Grid Vertices (Radius levels: 25%, 50%, 75%, 100%)
  let gridPaths = "";
  const levels = [0.25, 0.5, 0.75, 1.0];
  levels.forEach(lvl => {
    const r = maxRadius * lvl;
    const x1 = center + Math.cos(aVis) * r;
    const y1 = center + Math.sin(aVis) * r;
    const x2 = center + Math.cos(aCul) * r;
    const y2 = center + Math.sin(aCul) * r;
    const x3 = center + Math.cos(aSpd) * r;
    const y3 = center + Math.sin(aSpd) * r;
    gridPaths += `<polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3}" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>`;
  });

  // Grid Axis Lines
  const xVisMax = center + Math.cos(aVis) * maxRadius;
  const yVisMax = center + Math.sin(aVis) * maxRadius;
  const xCulMax = center + Math.cos(aCul) * maxRadius;
  const yCulMax = center + Math.sin(aCul) * maxRadius;
  const xSpdMax = center + Math.cos(aSpd) * maxRadius;
  const ySpdMax = center + Math.sin(aSpd) * maxRadius;

  const axisLines = `
    <line x1="${center}" y1="${center}" x2="${xVisMax}" y2="${yVisMax}" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
    <line x1="${center}" y1="${center}" x2="${xCulMax}" y2="${yCulMax}" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
    <line x1="${center}" y1="${center}" x2="${xSpdMax}" y2="${ySpdMax}" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
  `;

  // Data Polygon Vertices
  const xVis = center + Math.cos(aVis) * (maxRadius * rVis);
  const yVis = center + Math.sin(aVis) * (maxRadius * rVis);
  const xCul = center + Math.cos(aCul) * (maxRadius * rCul);
  const yCul = center + Math.sin(aCul) * (maxRadius * rCul);
  const xSpd = center + Math.cos(aSpd) * (maxRadius * rSpd);
  const ySpd = center + Math.sin(aSpd) * (maxRadius * rSpd);

  // SVG HTML String
  const svgHtml = `
    <svg id="scouting-radar-svg" viewBox="0 0 200 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:transparent; font-family:'Barlow Condensed', sans-serif;">
      <!-- Grid Concentric Levels -->
      ${gridPaths}
      
      <!-- Axis Lines -->
      ${axisLines}
      
      <!-- Labels -->
      <text x="${xVisMax}" y="${yVisMax - 8}" fill="#8a918f" font-size="9" font-weight="700" text-anchor="middle" letter-spacing="0.05em">VIS</text>
      <text x="${xCulMax - 10}" y="${yCulMax + 10}" fill="#8a918f" font-size="9" font-weight="700" text-anchor="middle" letter-spacing="0.05em">CUL</text>
      <text x="${xSpdMax + 10}" y="${ySpdMax + 10}" fill="#8a918f" font-size="9" font-weight="700" text-anchor="middle" letter-spacing="0.05em">SPD</text>
      
      <!-- Data Polygon -->
      <polygon points="${xVis},${yVis} ${xCul},${yCul} ${xSpd},${ySpd}" fill="rgba(212,160,23,0.22)" stroke="#D4A017" stroke-width="2" stroke-linejoin="round"/>
      
      <!-- Data Dots -->
      <circle cx="${xVis}" cy="${yVis}" r="3" fill="#D4A017"/>
      <circle cx="${xCul}" cy="${yCul}" r="3" fill="#D4A017"/>
      <circle cx="${xSpd}" cy="${ySpd}" r="3" fill="#D4A017"/>
    </svg>
  `;
  container.innerHTML = svgHtml;
}

/* === LIVE SCOUT NAME BINDING === */
function updateScoutCardName(val) {
  const cardNameEl = document.getElementById('scout-card-name');
  if (cardNameEl) {
    cardNameEl.textContent = val.trim() !== '' ? val.toUpperCase() : 'GUEST SCOUT';
  }
}

/* === STANDALONE SVG EXPORT & DOWNLOAD === */
function downloadScoutCard(e) {
  if (e) e.preventDefault();
  
  const nameVal = (document.getElementById('scout-name-input').value || 'GUEST SCOUT').toUpperCase();
  const classRating = document.getElementById('scout-class-rating').textContent;
  const verdictText = document.getElementById('audit-desc').textContent;
  
  const vis = parseInt(document.getElementById('stat-num-vis').textContent) || 0;
  const cul = parseInt(document.getElementById('stat-num-cul').textContent) || 0;
  const spd = parseInt(document.getElementById('stat-num-spd').textContent) || 0;
  
  // Math for Radar Chart inside exported SVG
  const center = 100;
  const maxRadius = 65;
  const rVis = vis / 100;
  const rCul = cul / 100;
  const rSpd = spd / 100;
  const aVis = -Math.PI / 2;
  const aCul = aVis + (2 * Math.PI / 3);
  const aSpd = aVis - (2 * Math.PI / 3);

  // Background Grid Vertices
  let gridPaths = "";
  const levels = [0.25, 0.5, 0.75, 1.0];
  levels.forEach(lvl => {
    const r = maxRadius * lvl;
    const x1 = center + Math.cos(aVis) * r;
    const y1 = center + Math.sin(aVis) * r;
    const x2 = center + Math.cos(aCul) * r;
    const y2 = center + Math.sin(aCul) * r;
    const x3 = center + Math.cos(aSpd) * r;
    const y3 = center + Math.sin(aSpd) * r;
    gridPaths += `<polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3}" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>`;
  });

  // Grid Axis Lines
  const xVisMax = center + Math.cos(aVis) * maxRadius;
  const yVisMax = center + Math.sin(aVis) * maxRadius;
  const xCulMax = center + Math.cos(aCul) * maxRadius;
  const yCulMax = center + Math.sin(aCul) * maxRadius;
  const xSpdMax = center + Math.cos(aSpd) * maxRadius;
  const ySpdMax = center + Math.sin(aSpd) * maxRadius;

  const axisLines = `
    <line x1="${center}" y1="${center}" x2="${xVisMax}" y2="${yVisMax}" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <line x1="${center}" y1="${center}" x2="${xCulMax}" y2="${yCulMax}" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
    <line x1="${center}" y1="${center}" x2="${xSpdMax}" y2="${ySpdMax}" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
  `;

  // Data Polygon Vertices
  const xVis = center + Math.cos(aVis) * (maxRadius * rVis);
  const yVis = center + Math.sin(aVis) * (maxRadius * rVis);
  const xCul = center + Math.cos(aCul) * (maxRadius * rCul);
  const yCul = center + Math.sin(aCul) * (maxRadius * rCul);
  const xSpd = center + Math.cos(aSpd) * (maxRadius * rSpd);
  const ySpd = center + Math.sin(aSpd) * (maxRadius * rSpd);

  // Wrap long verdict text into SVG text lines (each max 45 chars)
  const words = verdictText.split(' ');
  const lines = [];
  let currentLine = "";
  words.forEach(word => {
    if ((currentLine + " " + word).trim().length > 45) {
      lines.push(currentLine.trim());
      currentLine = word;
    } else {
      currentLine += " " + word;
    }
  });
  if (currentLine.trim().length > 0) {
    lines.push(currentLine.trim());
  }

  let verdictTextSvgElements = "";
  lines.slice(0, 5).forEach((line, idx) => {
    verdictTextSvgElements += `<text x="35" y="${195 + idx * 16}" fill="#dfdfdf" font-size="10" font-family="-apple-system, BlinkMacSystemFont, sans-serif">${line}</text>`;
  });

  // Standalone Exportable SVG Template
  const finalSvg = `
    <svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Background Charcoal Emerald -->
      <rect width="600" height="400" fill="#080c0a"/>
      
      <!-- Lighter internal frame -->
      <rect x="15" y="15" width="570" height="370" fill="#0c110e" stroke="rgba(212,160,23,0.15)" stroke-width="1"/>
      <rect x="18" y="18" width="564" height="364" fill="none" stroke="rgba(212,160,23,0.06)" stroke-width="1"/>
      
      <!-- Gold corner highlights -->
      <path d="M 15 30 L 15 15 L 30 15" stroke="#D4A017" stroke-width="2" fill="none"/>
      <path d="M 585 30 L 585 15 L 570 15" stroke="#D4A017" stroke-width="2" fill="none"/>
      <path d="M 15 370 L 15 385 L 30 385" stroke="#D4A017" stroke-width="2" fill="none"/>
      <path d="M 585 370 L 585 385 L 570 385" stroke="#D4A017" stroke-width="2" fill="none"/>

      <!-- Header Label -->
      <text x="35" y="48" fill="#8a918f" font-size="10" font-family="monospace" font-weight="700" letter-spacing="0.15em">SCOUTING REPORT // DATA ANALYTICS DEPT.</text>
      <line x1="35" y1="58" x2="565" y2="58" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>

      <!-- LEFT SIDE: Metadata & Diagnostics -->
      
      <!-- Scout Name -->
      <text x="35" y="90" fill="#8a918f" font-size="8" font-family="-apple-system, sans-serif" font-weight="700" letter-spacing="0.05em">SCOUT ID</text>
      <text x="35" y="112" fill="#ffffff" font-size="16" font-family="monospace" font-weight="700" letter-spacing="0.02em">${nameVal}</text>
      
      <!-- Scout Class Badge -->
      <text x="35" y="145" fill="#8a918f" font-size="8" font-family="-apple-system, sans-serif" font-weight="700" letter-spacing="0.05em">CLASS RATING</text>
      
      <!-- Badge container box -->
      <rect x="35" y="152" width="105" height="24" rx="2" fill="rgba(212,160,23,0.06)" stroke="rgba(212,160,23,0.4)" stroke-width="1"/>
      <text x="87.5" y="168" fill="#D4A017" font-size="10" font-family="monospace" font-weight="700" text-anchor="middle" letter-spacing="0.05em">${classRating}</text>

      <!-- Diagnostic Report -->
      <text x="35" y="210" fill="#8a918f" font-size="8" font-family="-apple-system, sans-serif" font-weight="700" letter-spacing="0.05em">DIAGNOSTIC REPORT</text>
      <g transform="translate(0, 15)">
        ${verdictTextSvgElements}
      </g>

      <!-- RIGHT SIDE: Visual Chart and Values -->
      <g transform="translate(365, 80)">
        <!-- Center points meeting at 100,100 of the 200x200 scope -->
        <!-- Concentric grid polygons -->
        ${gridPaths}
        <!-- Grid axes -->
        ${axisLines}
        <!-- Grid Labels -->
        <text x="${xVisMax}" y="${yVisMax - 8}" fill="#8a918f" font-size="9" font-family="sans-serif" font-weight="700" text-anchor="middle">VIS</text>
        <text x="${xCulMax - 10}" y="${yCulMax + 10}" fill="#8a918f" font-size="9" font-family="sans-serif" font-weight="700" text-anchor="middle">CUL</text>
        <text x="${xSpdMax + 10}" y="${ySpdMax + 10}" fill="#8a918f" font-size="9" font-family="sans-serif" font-weight="700" text-anchor="middle">SPD</text>

        <!-- Dynamic Data Polygon -->
        <polygon points="${xVis},${yVis} ${xCul},${yCul} ${xSpd},${ySpd}" fill="rgba(212,160,23,0.22)" stroke="#D4A017" stroke-width="2" stroke-linejoin="round"/>
        <!-- Active dots -->
        <circle cx="${xVis}" cy="${yVis}" r="3" fill="#D4A017"/>
        <circle cx="${xCul}" cy="${yCul}" r="3" fill="#D4A017"/>
        <circle cx="${xSpd}" cy="${ySpd}" r="3" fill="#D4A017"/>
      </g>

      <!-- Stats Values Listing -->
      <g transform="translate(375, 290)">
        <!-- VIS -->
        <text x="0" y="0" fill="#8a918f" font-size="10" font-family="-apple-system, sans-serif" font-weight="700">VIS (Vision &amp; Reading)</text>
        <text x="180" y="0" fill="#ffffff" font-size="10" font-family="monospace" font-weight="700" text-anchor="end">${vis}</text>
        <line x1="0" y1="6" x2="180" y2="6" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
        
        <!-- CUL -->
        <text x="0" y="20" fill="#8a918f" font-size="10" font-family="-apple-system, sans-serif" font-weight="700">CUL (Football Culture)</text>
        <text x="180" y="20" fill="#ffffff" font-size="10" font-family="monospace" font-weight="700" text-anchor="end">${cul}</text>
        <line x1="0" y1="26" x2="180" y2="26" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
        
        <!-- SPD -->
        <text x="0" y="40" fill="#8a918f" font-size="10" font-family="-apple-system, sans-serif" font-weight="700">SPD (Decision Speed)</text>
        <text x="180" y="40" fill="#ffffff" font-size="10" font-family="monospace" font-weight="700" text-anchor="end">${spd}</text>
      </g>

      <!-- Footer watermark -->
      <text x="35" y="360" fill="rgba(255,255,255,0.15)" font-size="8" font-family="monospace" letter-spacing="0.05em">OTHMANE EDDAQQAQ // FOOTBALL. DATA. MOROCCO.</text>
    </svg>
  `;

  // Trigger browser download of stand-alone SVG file
  const svgBlob = new Blob([finalSvg.trim()], {type: "image/svg+xml;charset=utf-8"});
  const svgUrl = URL.createObjectURL(svgBlob);
  const downloadLink = document.createElement("a");
  downloadLink.href = svgUrl;
  downloadLink.download = `scouting_report_${nameVal.toLowerCase().replace(/\\s+/g, '_') || 'analyst'}.svg`;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
  URL.revokeObjectURL(svgUrl);
}

// Initialise visuals on page load
window.addEventListener('DOMContentLoaded', updateCompletedParametersVisuals);

