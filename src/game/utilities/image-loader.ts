import { Texture } from "pixi.js";



export enum ImageIds{
    Globie = 1,
    Friend = 2,
    Enemy = 3

}
export class ImageLoader {

    private static ImagePaths: any[] = [
        { key: ImageIds.Globie, path: 'assets/images/CharGlobie.png', texture: null },
        { key: ImageIds.Friend, path: 'assets/images/Friend.png', texture: null},
        { key: ImageIds.Enemy, path: 'assets/images/Goblin.png', texture: null}];

    static load(callback: Function) {
        var loader = PIXI.loader;

        for (var i = 0; i < ImageLoader.ImagePaths.length; i++) {
            loader.add(ImageLoader.ImagePaths[i].path);
        }

        loader.load(() => ImageLoader.makeTextures(callback));
    }

    private static makeTextures(callback: Function) {
        for (var i = 0; i < ImageLoader.ImagePaths.length; i++) {
            var texture = PIXI.loader.resources[ImageLoader.ImagePaths[i].path].texture;
            ImageLoader.ImagePaths[i].texture = texture;
        }

        callback();
    }

    static texterById(id: ImageIds) :Texture {
        console.log("Get by Id", id, "Textures", ImageLoader.ImagePaths);
        return ImageLoader.ImagePaths.filter(t=> t.key == id)[0].texture;

    }

}

