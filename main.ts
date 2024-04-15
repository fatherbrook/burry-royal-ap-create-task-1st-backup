function Showdown(list: any[]) {

}
let list = [
    tilemap`level7`,
    tilemap`level4`,
    tilemap`level12`,
    tilemap`level13`
]
let mySprite = sprites.create(img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c b b b b b b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b c b b b c b b b b f . . . . 
    f b 1 f f f 1 b b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    . f b b b b b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    .........ccc............
    .........cccccccc.......
    ......cc..cc55555cc.....
    ......cccc555555555c....
    ......ccb55555555555c...
    ...cc..b55555ff155555c..
    ...cccb5555555ff55d55c..
    ....ccb55555d55555555c..
    .....b55555d5555d5555c..
    ..cc.b555ddd55555bbbbc..
    ..cccd55ddddd5555d555c..
    ...ccdd5dbdddbbbd555c...
    ....bdddb555bbbbbccc....
    ..cccdddb555cbbbbbbc....
    ...ccddddb555cbbbbbbc...
    ....cdddddb555cbbbbbc...
    ...ccddddddb55cbbbbbcc..
    ..ccbddddd55bcbbbbbbcc..
    ccdddddddd5555bbbbbbc...
    cdddddddbdd555bbbbbc....
    .ccddddbbbdd55cbbccc....
    ...cccbbcbddddccdddcc...
    ......cccdd555dcccccc...
    ........cccccccc........
    `, SpriteKind.Player))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))

