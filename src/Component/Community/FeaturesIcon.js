import react from 'react'

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
                    {
                        FeaturesIcon.map((index) => <img src={index.src}
                            title={index.title} alt="images" />)
                    }
                </div>
            </>

        )
    }
}
export default FeaturesIcon;