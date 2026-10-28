// Which universes merge where, community by community, in the November-December 2026 merges.
// Source: https://ogame.comastuff.com/merges2026.html (as of 28/10/2026), from the official announcements.
//
// Each community lists its groups. A group is a set of universes whose players can choose among the
// same destinations.
//   from  the universes of the group: a number is a universe of this community, 'DE 171' one of another
//   to    the destinations, as 'Name (COMMUNITY number)'. A leading '+' marks a universe that already exists
//         and keeps running (a hard merge): its own players are part of the merged ranking. Without '+'
//         the destination is a new universe, which the API knows nothing about yet.
//   note  optional, shown with the group
// A destination can take groups of several communities (Yi-SWAN, Zhang and Astrid ES take AR and MX too).
// fetch.mjs downloads every universe named here; index.html reads the map from data/index.js.
export const MERGES =
{
    AR:
    [
        { from:[156], to:['Umbra (AR 173)', 'Yi–SWAN (ES 280)', 'Zhang (ES 281)'] },
        { from:[157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167], to:['Umbra (AR 173)', 'Yi–SWAN (ES 280)', 'Zhang (ES 281)', 'Astrid (ES 282)'] },
    ],
    BR:
    [
        { from:[155, 163, 166, 167, 168, 172], to:['Ferdinand (BR 184)', 'Gaspra (BR 185)'] },
        { from:[169, 170, 171, 173, 174, 175], to:['Ferdinand (BR 184)', 'Gaspra (BR 185)', 'Halley (BR 186)'] },
    ],
    CZ:
    [
        { from:[173, 178, 179, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 251], to:['Bharani (CZ 257)', 'Ceres (CZ 258)', 'Delphinus (CZ 259)'] },
    ],
    DE:
    [
        { from:[171], to:['+Volans (EN 174)'], note:'Chaos merge DE + EN' },
        { from:[199, 260, 261, 262], to:['Eclipse (DE 286)', 'Falcon (DE 287)'] },
        { from:[266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277], to:['Galileo (DE 288)', 'Hubble (DE 289)', 'Ishtar (DE 290)'] },
        { from:[258, 259], to:['Eclipse (DE 286)', 'Falcon (DE 287)', 'Galileo (DE 288)', 'Hubble (DE 289)', 'Ishtar (DE 290)'] },
    ],
    DK:
    [
        { from:[154, 155, 156, 157, 158], to:['+Universo 1 (DK 1)', '+Polaris (DK 142)', 'Janice (DK 162)'] },
    ],
    EN:
    [
        { from:['DE 171'], to:['+Volans (EN 174)'], note:'Chaos merge DE + EN' },
        { from:[122, 190, 198, 261], to:['+Universo 1 (EN 1)', 'Yi–SWAN (EN 280)', 'Zhang (EN 281)', 'Astrid (EN 282)'] },
        { from:[262, 263, 264, 265, 266, 267, 268, 269, 270, 271], to:['+Universo 1 (EN 1)', 'Yi–SWAN (EN 280)', 'Zhang (EN 281)', 'Astrid (EN 282)', 'Buzz (EN 283)'] },
    ],
    ES:
    [
        { from:[262, 264, 265, 266, 267, 268, 269, 270, 271, 272], to:['Yi–SWAN (ES 280)', 'Zhang (ES 281)', 'Astrid (ES 282)'] },
        { from:[257, 258, 261], to:['Yi–SWAN (ES 280)', 'Zhang (ES 281)'] },
        { from:[256, 263], to:['West (ES 278)', 'Xolotlan (ES 279)'] },
    ],
    FR:
    [
        { from:[172, 253, 260, 263, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277], to:['Eclipse (FR 286)', 'Falcon (FR 287)', 'Galileo (FR 288)', 'Hubble (FR 289)', 'Ishtar (FR 290)'] },
        { from:[258], to:['+Thuban (FR 198)'] },
    ],
    GR:
    [
        { from:[138, 144], to:['+Taurus (GR 120)'] },
        { from:[142, 143, 146, 147, 150], to:['+Kallisto (GR 137)'] },
        { from:[145, 148, 149], to:['+Yildun (GR 151)'] },
    ],
    HR:
    [
        { from:[127], to:['+Yakini (HR 125)'] },
        { from:[137, 138, 139, 140, 141, 142, 143, 144], to:['Wezn (HR 149)'] },
    ],
    HU:
    [
        { from:[160, 164, 165], to:['Isonoe (HU 187)', 'Juno (HU 188)'] },
        { from:[168, 169, 170, 171, 172, 173, 174, 176, 177, 178, 179], to:['Isonoe (HU 187)', 'Juno (HU 188)', '+Kalyke (HU 163)', '+Weywot (HU 175)'] },
    ],
    IT:
    [
        { from:[264, 265, 267, 269, 270, 274], to:['Celestia (IT 284)', 'Zhang (IT 281)'] },
        { from:[195, 254], to:['Zhang (IT 281)', 'Astrid (IT 282)'] },
        { from:[266, 268, 271, 272, 273, 275, 276], to:['Astrid (IT 282)', 'Buzz (IT 283)'] },
    ],
    JP:
    [
        { from:[117], to:['+Andromeda (JP 101)'] },
    ],
    MX:
    [
        { from:[143], to:['Indus (MX 161)', 'Yi–SWAN (ES 280)', 'Zhang (ES 281)'] },
        { from:[147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157], to:['Indus (MX 161)', 'Yi–SWAN (ES 280)', 'Zhang (ES 281)', 'Astrid (ES 282)'] },
    ],
    NL:
    [
        { from:[168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179], to:['+Aquarius (NL 153)', '+Bellatrix (NL 154)', '+Cosmos (NL 155)'] },
    ],
    PL:
    [
        { from:[68, 163, 170, 189, 199, 251, 259, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273], to:['Xolotlan (PL 279)', 'Yi–SWAN (PL 280)', 'Zhang (PL 281)', 'Astrid (PL 282)', 'Buzz (PL 283)', 'Celestia (PL 284)'] },
    ],
    PT:
    [
        { from:[160, 163, 164, 166, 167], to:['Gaspra (PT 185)', 'Halley (PT 186)'] },
        { from:[168, 169, 170, 171, 172, 173, 174, 175], to:['Isonoe (PT 187)', 'Juno (PT 188)'] },
    ],
    RO:
    [
        { from:[124, 147, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165], to:['Umbra (RO 173)', 'Volans (RO 174)'] },
    ],
    RU:
    [
        { from:[103, 178, 182, 188, 193, 199, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264], to:['+Universo 1 (RU 1)', 'Quasi-Stellar (RU 272)', 'Regulus (RU 273)', 'Scorpius (RU 274)'] },
    ],
    SI:
    [
        { from:[117, 118, 119], to:['+Fornax (SI 106)', '+Leo (SI 112)'] },
    ],
    SK:
    [
        { from:[131, 133, 135], to:['+Hydra (SK 108)'] },
        { from:[126, 130, 132, 134], to:['+Orion (SK 115)'] },
    ],
    TR:
    [
        { from:[1, 190, 251, 252, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268], to:['Titania (TR 275)', 'Ukdah (TR 276)', 'Veritate (TR 277)'] },
    ],
    TW:
    [
        { from:[139, 141, 155, 159, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172], to:['Belinda (TW 180)', 'Cetus (TW 181)', 'Dione (TW 182)'] },
    ],
    US:
    [
        { from:[160, 174, 178, 185, 187, 192, 195, 197, 198, 199, 251, 252, 253, 254], to:['Mars (US 268)', 'Nembus (US 269)'] },
        { from:[255, 256, 257, 258, 259, 260], to:['Mars (US 268)', 'Nembus (US 269)', 'Ophiuchus (US 270)'] },
    ],
};
