Kako bismo setapovali react aplikaciju, potrebno je da uradimo par stvari:

1 . kloniramo github repozitorijum na Desktop-u(desni klik mišem, pa git bash here):

git clone https://github.com/IlijaTrifke/fon_hakaton23.git

2 . ulazimo u direktorjium fon_hakaton23-a:

cd fon_hakaton23

3 . instaliramo potrebne dependency-je za react:

npm install

Rad na sajtu:
Bilo bi dobro da svako od nas napravi granu na kojoj ce raditi (grana se pravi komandom git checkout -b "naziv grane"). Nazivi grana mogu biti: "landing", "o hakatonu", "partneri"... Kada napravimo granu, ubuduće iskljucivo pravite izmene na toj vasoj grani

Kada kloniramo i setapujemo projekat, svako od nas bi trebalo da napravi folder u src\components kao naziv stranice na kojoj radi. npr: Aleksa radi na stranici "o-hakatonu", Aleksa ce napraviti folder o-hakatonu i u njega ce ubacivati sve komponente(npr.jsx i css) vezane za njegov deo posla.

naziv_grane = naziv sekcije za koju cete pisati kod!

//KAKO KREIRAMO GRANE
git checkout -b naziv grane

//KAKO DODAJEMO PROMENE NA GITHUB GRANI
git add .
git commit -m ‘poruka’
git push origin naziv_grane

//KAKO PULL-UJEMO PROMENE SA MASTER GRANE
git pull origin master

//KAKO LISTAMO SVE GRANE
git branch

//KAKO MENJAMO GRANU
git checkout naziv_grane

(U slucaju git checkout-a, desava se da nece nekad da radei iz razloga sto ste prethodno napravili izmene u kodu i vscode nece znati sta da radi sa tim izmenama,
pa je resenje ili da ih unstage-ujete(izbrisete) izmene, ili da ih pushujete na trenutnu granu)

//KAKO BRISEMO GRANE 
git branch --delete naziv_grane(nece vam biti potrebno)

//POVRATKOM NA MASTER GRANU DOBIJAMO KOD KOJI SE NALAZI NA MASTER GRANI
git checkout master

Bitna stavka!!!-Prilikom imenovanja jsx i css fajlova unutar vasih foldera, imunujte ih sa prvim pocetnim slovom(npr. SlikeTima.jsx, Ohakatonu.jsx...),
iz razloga sto je to react konvencija da komponente(jsx ili css) aplikacije budu prepoznate kao komponente, a ne kao html-tagove:
<Ohakatonu /> --> prepoznaje kao komponentu
<ohakatonu /> --> prepoznaje kao html-tag

U js(jsxu) prilikom kucanja html-a, return deo moze da vrati samo jedan div ili fragment, sto znaci da treba da napravite jedan taj div koji predstavlja wrapper(kao body u htmlu) i dajte mu klasu npr. slike-tima-wrapper, footer-wrapper, u zavisnoti koju sekciju radite

Kada zelite da proverite vas kod koji ste kucali do sada za odredjenu sekciju, pre pokretanja aplikacije(npm start), ubacite komponentu u Home.js(primer je Pocetna.jsx, mozete je izbrisati), ne u App.js, i potrebno je da bude importovana(automatski importuje kad kucate <Pocetna/>). U App.js se nalaze dve rute, jedna za home(Home.js) stranicu a druga ruta je za prijavnu stranicu
