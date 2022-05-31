import React from 'react';
import {Container} from "react-bootstrap";
// import Geogebra from "react-geogebra";
import '../../scripts/initIndex'
import './GraphicEditor.css'


const GraphicEditor = () => {
    return (

            <Container className="mt-5 d-flex flex-column justify-content-center align-items-center" id="main-container">
                {/*<Geogebra
                    width="800"
                    height="600"
                    appName="geometry"
                    scaleContainerClass="ggb-container"
                    showMenuBar
                    showToolBar
                    showAlgebraInput
                />*/}

                <h1 className="text-center pt-3">Редактор</h1>
                <div className="ggb-container col-12 col-lg-auto">
                    <div id="ggb-element"></div>
                </div>
                <hr/>
                <p>На данной странице вы можете выполнять построения в пространстве с помощью GeoGebra.</p>
            </Container>

    );
};

export default GraphicEditor;