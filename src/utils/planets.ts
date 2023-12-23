type Obj = {
    [key: string]: string
}

const images: Obj = {
    tatooine: "https://cryptospro.com.br/planetas/planeta_0000_tatooine.png",
    naboo: "https://cryptospro.com.br/planetas/planeta_0001_naboo.png",
    mustafar: "https://cryptospro.com.br/planetas/planeta_0002_mustafar.png",
    kashyyyk: "https://cryptospro.com.br/planetas/planeta_0003_kashyyyk.png",
    hoth: "https://cryptospro.com.br/planetas/planeta_0004_hoth.png",
    endor: "https://cryptospro.com.br/planetas/planeta_0005_endor.png",
    dagobah: "https://cryptospro.com.br/planetas/planeta_0006_dagobah.png",
    coruscant: "https://cryptospro.com.br/planetas/planeta_0007_coruscant.png",
    bespin: "https://cryptospro.com.br/planetas/planeta_0008_bespin.png",
    alderaan: "https://cryptospro.com.br/planetas/planeta_0009_alderaan.png"
}

function fetchRandonImage(): string {
    const planets = Object.values(images)
    const randomPlanet = planets[Math.floor(Math.random() * planets.length)]
    return randomPlanet
}

function getPlanetImage(name: string): string {
    const res = images[name]
    return res ? res : fetchRandonImage()
}

export { getPlanetImage }
