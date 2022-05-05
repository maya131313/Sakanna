import react from 'react'
import Zoom from 'react-reveal/Zoom';

class FeaturesIcon extends react.Component {
    render() {
        let FeaturesIcon = [
            { src: './compo-fea/pool.png', title: "fea1" },
            { src: './compo-fea/gym.png', title: "fea2" },
            { src: './compo-fea/sofa.png', title: "fea3" },
            { src: './compo-fea/hall.png', title: "fea4" },
        ]
        return (
            <>
                <div className="featuers">
                <Zoom top cascade>
                    {
                        FeaturesIcon.map((index) => <img src={index.src}
                            title={index.title} className="iop" alt="images" />)
                    }
                    </Zoom>
                </div>
            </>

        )
    }
}
export default FeaturesIcon;