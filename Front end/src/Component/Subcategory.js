import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function SubCategory(props) {

    const [Category, setCategory] = useState([]);
    const { code } = useParams();

    useEffect(() => {
        fetch("http://localhost:8080/api/subcategories/" + code).then(res => res.json())
            .then(result => {
                setCategory(result);
            }
            );
    }, []);


    //const info=Categary.filter((cat)=>cat.subcatId.includes(code));

    return (
        // <div style={{ marginLeft: "180px", display: "flex", flexWrap: "wrap" }}>
        <div>
            <div className="Cardhead">
                <h1>Categary Page</h1>
                <h3 style={{}}>Categary Table Data</h3>
            </div>
            <div className="container-fluid mb-5">
                <div className="row-4" >
                    <div className="col-12 mx-auto">
                        <div className="row gt-4 Shocard" style={{ marginLeft: '100px' }}>

                            {Category.map(cat => (
                                <Card className='Card' style={{ width: '18rem' }}>
                                    <div className='card-img'><Card.Img variant="top" style={{ objectFit: "contain" }} src={cat.category_Img_Path} /></div>
                                    <Card.Body>
                                        <Card.Title className='Carttitle'>{cat.category_Name}</Card.Title>
                                        <Card.Text>{cat.category_Id}</Card.Text>

                                        {(cat.flag === true) ? (<Button className='Button' variant="info" href={'/subcategories/' + cat.category_Id}>view 
                                        categories</Button>) : (<Button
                                                className='Button' variant="info" href={"/productsByCat/"+cat.category_Id  }>view products</Button>)}
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default SubCategory;