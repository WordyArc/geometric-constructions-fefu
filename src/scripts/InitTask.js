import React, {useEffect} from 'react';
import Geogebra from "./InitGGBApp";


const InitTask = () => {

    function ChangeMode() {
        const app = window.appId;
        if (document.getElementById('edit-mode').innerText === "Режим презентации") {
            document.getElementById("edit-mode").innerText = "Режим редактирования";
            app.setPerspective("5");
            app.enableRightClick(true);
        } else {
            document.getElementById("edit-mode").innerText = "Режим презентации";
            app.setPerspective("T");
            app.enableRightClick(false);
            app.setAxesVisible(3, false, false, false);
        }
    }

    var scenes = new Map();
    var sceneNumber = 1;

    function addScene(number, names) {
        scenes.set(number, names);
    }

    function hideScene(number) {
        const app = window.appId;
        let namesArray = scenes.get(number);
        for (let i = 0; i < namesArray.length; ++i) {
            app.setVisible(namesArray[i], false);
        }
    }

    function showScene(number) {
        const app = window.appId;
        let namesArray = scenes.get(number);
        for (let i = 0; i < namesArray.length; ++i) {
            app.setVisible(namesArray[i], true);
        }
    }

    function prevScene() {
        const app = window.appId;
        let prevSceneNumber = sceneNumber - 1;
        if (prevSceneNumber > 0) {
            hideScene(sceneNumber);
            --sceneNumber;
            document.getElementById("current-scene").innerText = "Рисунок " + sceneNumber;
        }
        else return;
    }

    function nextScene() {
        const app = window.appId;
        let nextScene = sceneNumber + 1;
        if (nextScene < scenes.size + 1) {
            showScene(nextScene);
            ++sceneNumber;
            document.getElementById("current-scene").innerText = "Рисунок " + sceneNumber;
        }
        else return;
    }


    /*figures start*/
    function createPoint(name, x, y, z, isVisible = true, colorArray = [0, 0, 255]) {
        const app = window.appId;
        app.evalCommand(`${name} = Point({${x}, ${y}, ${z}})`);
        app.setLabelVisible(name, true);
        app.setVisible(name, isVisible);
        app.setColor(name, colorArray[0], colorArray[1], colorArray[2]);
    }

    function createPointIntersect(name, first_object, second_object, colorArray = [0, 0, 255]) {
        const app = window.appId;
        app.evalCommand(`${name} = Intersect(${first_object}, ${second_object})`);

        // WORKAROUND (STRANGE BEHAVIOR OF GEOGEBRA)
        if (app.exists(`${name}_1`)) {
            app.renameObject(`${name}_1`, name);
        }

        app.setLabelVisible(name, true);
        app.setColor(name, colorArray[0], colorArray[1], colorArray[2]);
    }


    function createLine(name, first_point, second_point, colorArray = [135, 206, 235]) {
        const app = window.appId;
        app.evalCommand(`${name} = Line(${first_point}, ${second_point})`);
        app.setColor(name, colorArray[0], colorArray[1], colorArray[2]);
        app.setLineThickness(name, 4);
    }

    function createParallelLine(name, point, line, colorArray = [135, 206, 235]) {
        const app = window.appId;
        app.evalCommand(`${name} = Line(${point}, ${line})`);
        app.setLabelVisible(name, true);
        app.setColor(name, colorArray[0], colorArray[1], colorArray[2]);
        app.setLineThickness(name, 4);
    }

    function createIntersectLinePlanes(name, first_plane, second_plane, colorArray = [135, 206, 235]) {
        const app = window.appId;
        app.evalCommand(`${name} = IntersectPath(${first_plane}, ${second_plane})`);
        app.setLabelVisible(name, true);
        app.setColor(name, colorArray[0], colorArray[1], colorArray[2]);
        app.setLineThickness(name, 4);
    }

    function createPerpendicularLine(name, point, line, colorArray = [135, 206, 235]) {
        const app = window.appId;
        app.evalCommand(`${name} = PerpendicularLine(${point}, ${line})`);
        app.setColor(name, colorArray[0], colorArray[1], colorArray[2]);
        app.setLineThickness(name, 4);
    }

    function createPerpendicularLinePlane(name, point, plane, colorArray = [135, 206, 235]) {
        const app = window.appId;
        app.evalCommand(`${name} = PerpendicularLine(${point}, ${plane})`);
        app.setColor(name, colorArray[0], colorArray[1], colorArray[2]);
        app.setLineThickness(name, 4);
    }


    function createSegment(name, first_point, second_point, colorArray = [135, 206, 235]) {
        const app = window.appId;
        app.evalCommand(`${name} = Segment(${first_point}, ${second_point})`);
        app.setColor(name, colorArray[0], colorArray[1], colorArray[2]);
    }

    function createVector(name, first_point, second_point, colorArray = [0, 0, 0]) {
        const app = window.appId;
        app.evalCommand(`${name} = Vector(${first_point}, ${second_point})`);
        app.setColor(name, colorArray[0], colorArray[1], colorArray[2]);
    }

    function createAngle(name, first_point, second_point, third_point, colorArray = [0, 0, 0]) {
        const app = window.appId;
        app.evalCommand(`${name} = Angle(${first_point}, ${second_point}, ${third_point})`);
        app.setLabelVisible(name, false);
        app.setColor(name, colorArray[0], colorArray[1], colorArray[2]);
    }


    function createPlanePoints(name, first_point, second_point, third_point, colorArray = [255, 0, 0]) {
        const app = window.appId;
        app.evalCommand(`${name} = Plane(${first_point}, ${second_point}, ${third_point})`);
        app.setLabelVisible(name, true);
        app.setColor(name, colorArray[0], colorArray[1], colorArray[2]);
    }

    function createPlanePointLine(name, point, line, colorArray = [255, 0, 0]) {
        const app = window.appId;
        app.evalCommand(`${name} = Plane(${point}, ${line})`);
        app.setLabelVisible(name, true);
        app.setColor(name, colorArray[0], colorArray[1], colorArray[2]);
    }

    function createPlaneTwoLines(name, first_line, second_line, colorArray = [255, 0, 0]) {
        const app = window.appId;
        app.evalCommand(`${name} = Plane(${first_line}, ${second_line})`);
        app.setLabelVisible(name, true);
        app.setColor(name, colorArray[0], colorArray[1], colorArray[2]);
    }


    function createCube(name, first_point, second_point, colorArray = [128, 128, 128]) {
        const app = window.appId;
        let cPointStringCommand = `C = Point(Circle(${second_point}, \
        Distance(${first_point}, ${second_point}), Segment(${first_point}, ${second_point})))`;
        app.evalCommand(cPointStringCommand);
        app.setLabelVisible("C", true);
        app.setColor("C", colorArray[0], colorArray[1], colorArray[2]);

        app.evalCommand(`${name} = Cube(${first_point}, ${second_point}, C)`)
        app.setColor(name, colorArray[0], colorArray[1], colorArray[2]);
    }

    function createPyramid(name, first_point, second_point, third_point, apex_point, colorArray = [128, 128, 128]) {
        const app = window.appId;
        app.evalCommand(`${name} = Pyramid(${first_point}, ${second_point}, ${third_point}, ${apex_point})`);
        app.setColor(name, colorArray[0], colorArray[1], colorArray[2]);
    }

    function createQuadPrism(name, first_point, second_point, third_point, fourth_point, top_point, colorArray = [128, 128, 128]) {
        const app = window.appId;
        app.evalCommand(`${name} = Prism(${first_point}, ${second_point}, ${third_point}, ${fourth_point}, ${top_point})`);

        // WORKAROUND (STRANGE BEHAVIOR OF GEOGEBRA)
        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        let pointIndex = alphabet.indexOf(top_point);

        for (let i = pointIndex + 1; i < pointIndex + 4; ++i) {
            app.setLabelVisible(alphabet[i], true);
        }

        app.setColor(name, colorArray[0], colorArray[1], colorArray[2]);
    }

    function createTriangularPrism(name, first_point, second_point, third_point, top_point, colorArray = [128, 128, 128]) {
        const app = window.appId;
        app.evalCommand(`${name} = Prism(${first_point}, ${second_point}, ${third_point}, ${top_point})`);

        // WORKAROUND (STRANGE BEHAVIOR OF GEOGEBRA)
        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        let pointIndex = alphabet.indexOf(top_point);

        for (let i = pointIndex + 1; i < pointIndex + 4; ++i) {
            app.setLabelVisible(alphabet[i], true);
        }

        app.setColor(name, colorArray[0], colorArray[1], colorArray[2]);
    }


    function createTriangle(name, first_point, second_point, third_point, colorArray = [255, 165, 0]) {
        const app = window.appId;
        app.evalCommand(`${name} = Polygon(${first_point}, ${second_point}, ${third_point})`);
        app.setColor(name, colorArray[0], colorArray[1], colorArray[2]);
        app.setFilling(name, 0.75);
    }

    function createQuad(name, first_point, second_point, third_point, fourth_point, colorArray = [255, 165, 0]) {
        const app = window.appId;
        app.evalCommand(`${name} = Polygon(${first_point}, ${second_point}, ${third_point}, ${fourth_point})`);
        app.setColor(name, colorArray[0], colorArray[1], colorArray[2]);
        app.setFilling(name, 0.75);
    }
    /*figures end*/

    /*plot*/
    function ggbOnInit() {
        const app = window.appId;
        app.setPerspective("T");

        app.setVisible("xOyPlane", false);
        app.setAxesVisible(3, false, false, false);

        // First scene
        createPoint("A", -2, -2, 0, true, [128, 128, 128]);
        createPoint("D", 2, -2, 0, true, [128, 128, 128]);
        createCube("ABCDEHGF", "A", "D");

        createPoint("P", 2, 0, 0);
        addScene(1, ["A", "D", "ABCDEHGF", "P"]);

        // Second scene
        createLine("EP", "E", "P", [128, 128, 128]);
        createLine("FP", "F", "P", [128, 128, 128]);
        createAngle("EPFangle", "E", "P", "F");
        addScene(2, ["EP", "FP", "EPFangle"]);
        hideScene(2);

        // Third scene
        createTriangle("DFPtriangle", "D", "F", "P");
        createAngle("FDPangle", "F", "D", "P");
        createSegment("FPsegment", "F", "P", [0, 0, 0]);
        addScene(3, ["DFPtriangle", "FDPangle", "FPsegment"]);
        hideScene(3);

        // Fourth scene
        createTriangle("EFPtriangle", "E", "F", "P");
        createAngle("PFEangle", "P", "F", "E");
        createSegment("EFsegment", "E", "F", [0, 0, 0]);
        createSegment("FPsegment_black", "F", "P", [0, 0, 0]);
        addScene(4, ["EFPtriangle", "PFEangle", "EFsegment", "FPsegment_black"]);
        hideScene(4);

        // Fifth scene
        createPlanePoints("EBC", "E", "B", "C", [34, 139, 34]);
        createLine("FC", "F", "C", [128, 128, 128]);
        createLine("EB", "E", "B", [128, 128, 128]);
        createQuad("EBCF", "E", "B", "C", "F", [255, 0, 0]);
        addScene(5, ["EBC", "FC", "EB", "EBCF"]);
        hideScene(5);

        // Sixth scene
        createPerpendicularLinePlane("PK", "P", "EBC", [128, 128, 128]);
        createPointIntersect("K", "PK", "EBC");
        createSegment("DG", "D", "G", [128, 128, 128]);
        createAngle("PEKangle", "P", "E", "K");
        addScene(6, ["PK", "K", "DG", "PEKangle"]);
        hideScene(6);

        // Seventh scene
        createTriangle("PKEtriangle", "P", "K", "E", [135, 206, 235]);
        createSegment("EPsegment", "E", "P", [0, 0, 0]);
        createSegment("KPsegment", "K", "P", [0, 0, 0]);
        addScene(7, ["PKEtriangle", "EPsegment", "KPsegment"]);
        hideScene(7);
    }

    function saveGgbFile(){
        const app = window.appId;
        app.getBase64(function(b){document.getElementById("Base64").value = b});
    }
    function loadGgbFile(){
        const app = window.appId;
        app.setBase64(document.getElementById("Base64").value);
    }

    function getObjname() {
        const app = window.appId;
        let i, strName, strType, strCommand;
        let objNumber = app.getObjectNumber();
        var strState = "Number of objects: " + objNumber;
        for (i=0; i < objNumber; i++) {
            strName = app.getObjectName(i);
            strType = app.getObjectType(strName);
            strCommand = app.getCommandString(strName);
            strState += "\n" + strType + " " + strName + ", " + strCommand;
            console.log(strName, i, strType)
        }
        console.log(app.getObjectName(0))
    }

    function setVisible() {
        const app = window.appId;
        let i, strName;
        let objNumber = app.getObjectNumber();
        for (i=0; i < objNumber; i++) {
            strName = app.getObjectName(i);
            app.setVisible(strName, true)
        }

    }
    function setHidden() {
        const app = window.appId;
        let i, strName;
        let objNumber = app.getObjectNumber();
        for (i=0; i < objNumber; i++) {
            strName = app.getObjectName(i);
            app.setVisible(strName, false)
        }
    }

    var scenes2 = new Map();
    var arr = [];

    function addScene2(number, names) {
        scenes2.set(number, names);
    }
    var startScene = 0;
    var key = 1;
    function setScene() {
        const app = window.appId;
        let i, strName;

        let objNumber = app.getObjectNumber();
        for (i = startScene; i < objNumber; i++) {
            strName = app.getObjectName(i);
            // addScene2(sceneNumber, [strName])
            arr[i] = strName;
            startScene = objNumber;
            console.log(objNumber);
            if (i === objNumber-1) {
                scenes.set(key, arr);
                key++;
            }
        }
        console.log(arr);
        arr = [];

        // addScene2(key, arr);
    }
    function shitScene() {
        // console.log(arr);
        console.log(scenes);

        // console.log(scenes);
        // console.log(key);
    }

    return (
        <div>
            <Geogebra
                debug
                id="appId"
                language="english"
                appName="3d"
                width="600"
                height="400"
                enableUndoRedo="false"
                useBrowserForJS="true"

            />
            <div className="btn-group d-flex justify-content-center w-50 under-buttons">
                <button className="btn btn-dark" onClick={prevScene}>Предыдущий рисунок</button>
                <button className="btn btn-dark" id="current-scene">Рисунок 1</button>
                <button className="btn btn-dark" onClick={nextScene} id="nextSceneButton">Следующий
                    рисунок
                </button>
            </div>
            <div className="d-flex justify-content-center under-buttons">
                <button className="btn btn-dark" id="edit-mode" onClick={ChangeMode}>Режим презентации
                </button>
                <button onClick={ggbOnInit}>Построить говно</button>
                <button onClick={getObjname}>получить имя</button>
                <button onClick={setVisible}>показать</button>
                <button onClick={setHidden}>скрыть</button>
                <button onClick={setScene}>сохранить сцену</button>
                <button onClick={shitScene}>показать сцены</button>

            </div>
            <ul>
                <li/><button onClick={saveGgbFile}>Save</button>
                    <li/><button onClick={loadGgbFile}>Load</button>
            </ul>
            <textarea name="Base64" id="Base64" cols="66" rows="8"></textarea>
        </div>
    );
};

export default InitTask;