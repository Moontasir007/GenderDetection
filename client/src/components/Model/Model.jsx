import { useEffect, useRef } from 'react';
import * as tmImage from '@teachablemachine/image';
import "./Model.css"

export default function Classify() {
    const webcamRef = useRef(null);
    const labelContainerRef = useRef(null);

    useEffect(() => {
        const runModel = async () => {
            const URL = 'https://teachablemachine.withgoogle.com/models/-Dfal48zO/';
            const modelURL = URL + 'model.json';
            const metadataURL = URL + 'metadata.json';

            const model = await tmImage.load(modelURL, metadataURL);
            const maxPredictions = model.getTotalClasses();

            const webcam = new tmImage.Webcam(300, 300, true); // width, height, flip
            await webcam.setup();
            await webcam.play();
            window.requestAnimationFrame(loop);

            webcamRef.current.appendChild(webcam.canvas);

            const labelContainer = labelContainerRef.current;
            for (let i = 0; i < maxPredictions; i++) {
                labelContainer.appendChild(document.createElement('div'));
            }

            async function loop() {
                webcam.update();
                await predict();
                window.requestAnimationFrame(loop);
            }

            async function predict() {
                const prediction = await model.predict(webcam.canvas);
                for (let i = 0; i < maxPredictions; i++) {
                    const classPrediction =
                        prediction[i].className + ': ' + prediction[i].probability.toFixed(2);
                    labelContainer.childNodes[i].innerHTML = classPrediction;
                }
            }
        };

        runModel();
    }, []);

    return (
        <div className='webcamBox'>
            <div className='center'>
                <h1 className='text'>Teachable Machine Image Model</h1>
                <div ref={webcamRef} id="webcam-container"></div>
                <div ref={labelContainerRef} id="label-container"></div>

            </div>
        </div >
    );
}
