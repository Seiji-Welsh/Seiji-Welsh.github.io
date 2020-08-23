class SceneManager{
    static activeScene;
    static Load(sceneName){
        entities = [];
        for(let i = 1; i <= Time.allCurrentTimeouts.length; i++){
            clearTimeout(Time.allCurrentTimeouts[i - 1]);
        }
        SceneManager.LoadOntop(sceneName);
    }
    static LoadOntop(sceneName){
        let t0 = performance.now();
        this.activeScene = sceneName;
        sceneName();
        let t1 = performance.now();
        console.log("LoadTime | " + ((t1 - t0) / 1000).toString() + " Seconds");
    }
    static Scene1(){
        spawnEntity(new Entity("Player", "Player", [new Renderer(0, "https://Seiji-Welsh.github.io/Game/Images/Crate.png", 16, 16, false)
        , new RectangleCollider(16, 16, 0, 0), new PlayerController(), new Physics(.5, 1.2, 1, 1, 1)]), 0, 0, 1, 1, 0)
        spawnEntity(new Entity("MouseObject", "ForeGround", [new MouseObject()]), 0, 0, 1, 1, 0)
        spawnEntity(new Entity("FPSUI", "UI", [new TextRendererUI("FPS: " + Math.round(randomRange(45, 52)), "left", "40px Calibri", "rgb(40, 40, 40)"), new FPSUI()]), 10, canvas.height - 50, 1, 1, 0)
        spawnEntity(new Entity("LevelManager", "NONE", [new LevelController()]), 0, 0, 1, 1, 0)
        spawnEntity(new Entity("HTMLController", "NONE", [new HTMLController()], 0, 0, 1, 1, 0))
        mainCamera = spawnEntity(new Entity("MainCamera", "camera", [new Camera(), new CameraEditorController()]), 0, 0, 1, 1, 0);
        SceneManager.Scene1Tiles();
    }
    static Scene2(){
        spawnEntity(new Entity("Player", "Player", [new Renderer(0, "https://Seiji-Welsh.github.io/Game/Images/Crate.png", 16, 16, false)
        , new RectangleCollider(16, 16, 0, 0), new PlayerController(), new Physics(.5, 1.2, 1, 1, 1)]), 0, 0, 1, 1, 0)
        spawnEntity(new Entity("MouseObject", "ForeGround", [new MouseObject()]), 0, 0, 1, 1, 0)
        spawnEntity(new Entity("FPSUI", "UI", [new TextRendererUI("FPS: " + Math.round(randomRange(45, 52)), "left", "40px Calibri", "rgb(40, 40, 40)"), new FPSUI()]), 10, canvas.height - 50, 1, 1, 0)
        spawnEntity(new Entity("LevelManager", "NONE", [new LevelController()]), 0, 0, 1, 1, 0)
        spawnEntity(new Entity("HTMLController", "NONE", [new HTMLController()], 0, 0, 1, 1, 0))
        mainCamera = spawnEntity(new Entity("MainCamera", "camera", [new Camera(), new CameraEditorController()]), 0, 0, 1, 1, 0);
        SceneManager.Scene2Tiles(); 
    }
    static Scene1Tiles(){
        
    }
    static Scene2Tiles(){

    }
}