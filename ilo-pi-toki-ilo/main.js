function main(){
try{
path$ = 'toki-ilo-pona/'
document.title = "akesi linja"
function oopen(){
if (readCookie("mutekili") == 0){
mutekilipimutenanpawan = "ala"
}else{
mutekilipimutenanpawan = readCookie("mutekili")
}
mutesike = 0
lekoali = []
while (mutesike < 18){
lekoali.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
mutesike = safeAdd([mutesike, 1])
}
sonapinasintawa = [0  ,   [-1, 0]  ,   [0, 1]  ,   [1, 0]  ,   [0, -1]]
lekoali[10][10] = 1
lekoali[10][11] = 1
lekoali[10][12] = 1
lekoali[10][5] = 5
lonpokapilawaakesi = 10
lonsewipilawaakesi = 10
lonpokapimonsiakesi = 12
lonsewipimonsiakesi = 10
nasintawa = 1
nasintawapitenpopini = nasintawa
akesilimokuekililontenpopoka = 0
mutekili = 0
musililon = 1
tenpotawa = 20
tenpotawatawasitelenakesi = safeAdd([tenpotawa / 10])
tenpotawatawasitelenakesi = Math.round(tenpotawatawasitelenakesi)
ilotenpopitawaakesi = 0
}
oopen()
function _sike(){
if (musililon){
kule(4,9,4)
leko(0, 0, 200, 200)
if (nena("sewi") && nasintawapitenpopini != 2){
nasintawa = 4
}
if (nena("anpa") && nasintawapitenpopini != 4){
nasintawa = 2
}
if (nena("pokaopen") && nasintawapitenpopini != 3){
nasintawa = 1
}
if (nena("pokapini") && nasintawapitenpopini != 1){
nasintawa = 3
}
if (ilotenpopitawaakesi == tenpotawa){
nasintawapitenpopini = nasintawa
ilotenpopitawaakesi = 0
otawaeakesi()
}
ositeleneakesi()
ilotenpopitawaakesi = safeAdd([ilotenpopitawaakesi, 1])
}else{
kule(9,0,0)
leko(0, 90, 200, 20)
kule(9,9,9)
lonpokapitokimoli = safeAdd([ctx$.measureText("sinamoli..sinawilemusisinlaolukae nenananpawan").actualBoundingBoxRight * -1 / 2 , 100])
sitelentoki("sinamoli..sinawilemusisinlaolukae nenananpawan", lonpokapitokimoli, 103)
if (nena("nanpawan")){
oopen()
}
}
kule(0,3,0)
leko(0, 0, 1, 200)
leko(199, 0, 1, 200)
leko(0, 199, 200, 1)
leko(0, 0, 200, 20)
if (musililon){
kule(9,9,9)
mutekilitawasitelen = safeAdd(["mutekilili" , Base10ToTokiPona(mutekili)])
}else{
kule(9,7,0)
mutekilitawasitelen = safeAdd(["mutekilipi suli nanpa wanli" , mutekilipimutenanpawan])
}
sitelentoki(mutekilitawasitelen, 5, 13)
}
function otawaeakesi(){
if (akesilimokuekililontenpopoka == 0){
nasintawapimonsiakesi = lekoali[lonsewipimonsiakesi][lonpokapimonsiakesi]
lekoali[lonsewipimonsiakesi][lonpokapimonsiakesi] = 0
lonpokapimonsiakesi = safeAdd([lonpokapimonsiakesi, sonapinasintawa[nasintawapimonsiakesi][0]])
lonsewipimonsiakesi = safeAdd([lonsewipimonsiakesi, sonapinasintawa[nasintawapimonsiakesi][1]])
}else{
akesilimokuekililontenpopoka = 0
mutekili = safeAdd([mutekili, 1])
otawaekili()
}
lekoali[lonsewipilawaakesi][lonpokapilawaakesi] = nasintawa
lonpokapilawaakesi = safeAdd([lonpokapilawaakesi, sonapinasintawa[nasintawa][0]])
lonsewipilawaakesi = safeAdd([lonsewipilawaakesi, sonapinasintawa[nasintawa][1]])
if (lonsewipilawaakesi < 0 || lonsewipilawaakesi > 17 || lonpokapilawaakesi < 0 || lonpokapilawaakesi > 19){
omoli()
} else if (lekoali[lonsewipilawaakesi][lonpokapilawaakesi] == 5){
akesilimokuekililontenpopoka = 1
lekoali[lonsewipilawaakesi][lonpokapilawaakesi] = nasintawa
} else if (lekoali[lonsewipilawaakesi][lonpokapilawaakesi] != 0){
omoli()
}else{
lekoali[lonsewipilawaakesi][lonpokapilawaakesi] = nasintawa
}
}
function ositeleneakesi(){
kule(0,0,9)
nanpasewisike = 0
while (nanpasewisike < 18){
nanpapokasike = 0
while (nanpapokasike < 20){
lonpokasitelen = safeAdd([nanpapokasike * 10])
lonsewisitelen = safeAdd([nanpasewisike * 10 , 20])
if (lekoali[nanpasewisike][ nanpapokasike] == 5){
sitelen("kili.png", lonpokasitelen, lonsewisitelen)
} else if (lekoali[nanpasewisike][ nanpapokasike] != 0){
antetantenpo = 10
otawaalatawapokatantenpo = 0
if (nanpapokasike == lonpokapimonsiakesi && nanpasewisike == lonsewipimonsiakesi && akesilimokuekililontenpopoka == 0){
antetantenpo = safeAdd([ilotenpopitawaakesi / tenpotawatawasitelenakesi * -1 , 10])
if (lekoali[nanpasewisike][ nanpapokasike] == 2 || lekoali[nanpasewisike][ nanpapokasike] == 3){
otawaalatawapokatantenpo = 1
}
}
if (musililon){
if (nanpapokasike == lonpokapilawaakesi && nanpasewisike == lonsewipilawaakesi){
antetantenpo = safeAdd([ilotenpopitawaakesi / tenpotawatawasitelenakesi])
if (lekoali[nanpasewisike][ nanpapokasike] == 1 || lekoali[nanpasewisike][ nanpapokasike] == 4){
otawaalatawapokatantenpo = 1
}
}
}
if (lekoali[nanpasewisike][ nanpapokasike] == 1){
lonsewisitelen = safeAdd([lonsewisitelen, 1])
lonpokasitelen = safeAdd([lonpokasitelen, -2 , antetantenpo * otawaalatawapokatantenpo * -1 , 10 * otawaalatawapokatantenpo])
leko(lonpokasitelen, lonsewisitelen, antetantenpo, 7)
}
if (lekoali[nanpasewisike][ nanpapokasike] == 2){
lonpokasitelen = safeAdd([lonpokasitelen, 1])
lonsewisitelen = safeAdd([lonsewisitelen, 1 , antetantenpo * otawaalatawapokatantenpo * -1 , 10 * otawaalatawapokatantenpo])
leko(lonpokasitelen, lonsewisitelen, 7, antetantenpo)
}
if (lekoali[nanpasewisike][ nanpapokasike] == 3){
lonsewisitelen = safeAdd([lonsewisitelen, 1])
lonpokasitelen = safeAdd([lonpokasitelen, 1 , antetantenpo * otawaalatawapokatantenpo * -1 , 10 * otawaalatawapokatantenpo])
leko(lonpokasitelen, lonsewisitelen, antetantenpo, 7)
}
if (lekoali[nanpasewisike][ nanpapokasike] == 4){
lonpokasitelen = safeAdd([lonpokasitelen, 1])
lonsewisitelen = safeAdd([lonsewisitelen, -2 , antetantenpo * otawaalatawapokatantenpo * -1 , 10 * otawaalatawapokatantenpo])
leko(lonpokasitelen, lonsewisitelen, 7, antetantenpo)
}
}
nanpapokasike = safeAdd([nanpapokasike, 1])
}
nanpasewisike = safeAdd([nanpasewisike, 1])
}
}
function otawaekili(){
kalama("kalamamoku.wav")
mapiakesiala = []
nanpasewisike = 0
while (nanpasewisike < 18){
nanpapokasike = 0
while (nanpapokasike < 20){
if (lekoali[nanpasewisike][nanpapokasike] == 0){
mapiakesiala.push([nanpasewisike, nanpapokasike])
}
nanpapokasike = safeAdd([nanpapokasike, 1])
}
nanpasewisike = safeAdd([nanpasewisike, 1])
}
lonkili = safeAdd([Math.random() * mapiakesiala.length])
lonkili = Math.round(lonkili)
lonkili = mapiakesiala[lonkili]
lonkilipoka = lonkili[1]
lonkilisewi = lonkili[0]
lekoali[lonkilisewi][lonkilipoka] = 5
nanpasewisike = safeAdd([nanpasewisike, 1])
}
function omoli(){
kalama("moli.wav")
musililon = 0
mutekilimoli = mutekili
mutekilimolipimutenanpawan = mutekilipimutenanpawan
if (mutekili > TokiPonaToBase10(mutekilipimutenanpawan)){
mutekilipimutenanpawan = Base10ToTokiPona(mutekili)
saveCookie("mutekili", mutekilipimutenanpawan)
}
}
sike$ = setInterval(function () {try {_sike()} catch (err) {errorDisplayer(err)}}, 100/30)
}catch(err){
    errorDisplayer(err)
}
window.removeEventListener("error", (event) => {
    testError = event
});   
}