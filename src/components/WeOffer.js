"use client";
import { Card, Button } from "react-bootstrap";
// import ShowRoom from './img/showroom.jpg';
// import Trank from './img/trank.png';
// import List from './img/list.jpg';
import { FaTruck } from "react-icons/fa6";
import { LiaClipboardListSolid } from "react-icons/lia";
import { BiSolidOffer } from "react-icons/bi";



// import ElectricalImage from './img/electrical.png';
// import EngineImage from './img/engine.png';
const WeOffer = () => {
  const categories = [
    {
      id: 1,
      title:"اول غرفة عرض في مصر",
      number:50,
      // image: ShowRoom, // تأكد من المسار
      description: "هتقدر تعاين كل قطعة بنفسك وتشوف جودتها على الطبيعة",
       icon: "Show Room",
    },
    {
      id: 2,
      title: "هنوصلك في اى مكان",
        number:20,
      // image: Trank, // أضف الصورة
      description: "عربيتنا مغطية جميع انحاء الجمهورية",
       icon: <FaTruck />
    },
       {
      id: 3,
      title: "كشوفات",
        number:30 ,
      // image: List, // أضف الصورة
      description: "اكبر تشكيلة قطع غيار في مصر بتتحديث شهريا",
       icon: <LiaClipboardListSolid />

    },
          {
      id: 4,
      title:"العروض والاسعار",
        number:10,
      // image: Trank, // أضف الصورة
      description: "ارخص الاسعار واعلى جودة في السوق المصري وافضل الخصومات",
      icon: <BiSolidOffer />
    },
    // ... أضف بقية الفئات
  ];

  return (
    <section className="latest-articles-section p-3">
      <div className="">
        <h1
        
        className="text-center mb-4">ماذا نقدم لكم</h1>
                <p className="text-center text-secondary">حرصت الشركة علي العمل بكامل طاقتها من أجل توسيع مجالاتها في الإنتشار بالسوق المصري</p>

        <div className="row" style={{
          display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
        }}>
          {categories.map((category) => (
            <div className="col-md-3 mb-4" key={category.id} style={{minWidth:"250px" , maxWidth:"350px" ,height:"275px"}}>
              <Card className="numbers-card shadow-sm border-0 h-100 ">
                {/* <Card.Img
                  variant="top"
                  src={category.image.src}
                  alt={category.title}
                  style={{ height: "225px", objectFit: "cover" }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/300x180";
                  }}
                /> */}
                    <div
                  variant="top"
                 className="d-flex justify-content-center align-items-center we-offer-icon"
                  alt={category.title}
                  style={{ height: "225px", objectFit: "cover" }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/300x180";
                  }}
                >
                  {category.icon}
                {/* <FaTruck  /> */}
                  </div>
                {/* <div
                
                 style={{ height: "225px" ,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "6rem",
                          fontWeight: "bold",
                          color: "#ffea03",
                        }}
                >
                 {category.number}
                </div> */}
                <Card.Body>
                  <Card.Title className="text-center">{category.title}</Card.Title>
                  <Card.Text className="text-center text-secondary"
                  >{category.description}</Card.Text>
                  {/* <Button className="main-button">
                    اقرأ المزيد
                  </Button> */}
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeOffer;