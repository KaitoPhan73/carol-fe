import Image from "next/image";
import React from "react";

const services = [
  {
    title: "Lặn biển",
    description:
      "Trải nghiệm lặn biển cùng các chuyên gia và thế giới biển xanh bát ngát đầy màu sắc thú vị.",
    image: "https://kinhboi.com/wp-content/uploads/2022/02/lan-bien-1.jpg",
  },
  {
    title: "Du lịch sinh thái",
    description:
      "Khám phá các khu bảo tồn biển và trải nghiệm những điều thú vị sẽ đến với bạn tại vùng đất này.",
    image:
      "https://bcp.cdnchinhphu.vn/334894974524682240/2022/4/2/con-dao-1648858077344216792948.jpg",
  },
  {
    title: "Hướng dẫn viên",
    description:
      "Được hướng dẫn bởi các chuyên gia giàu nhiệt huyết, tận tình và giàu kinh nghiệm .",
    image:
      "https://m.baotuyenquang.com.vn/media/images/2022/03/img_20220331093237.jpg",
  },
];

const Services = () => {
  return (
    <div>
      <div className="max-w-4xl py-12 md:py-24 lg:py-24 ">
        <h2 className="text-2xl text-gray-600 font-sans border-l border-black pl-12 py-4">
          Dịch vụ
        </h2>
        <p className="border-l-4 border-black pl-12 text-3xl font-light max-w-md py-4">
          Các dịch vụ mà bạn sẽ được trải nghiệm khi đến với chúng tôi.
        </p>
      </div>

      <div className="container mx-auto p-1 rounded-lg bg-gray-50">
        {services.map((service, index) => (
          <section className=" py-2" key={index}>
            <div className="grid grid-cols-1 gap-8">
              <div
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } items-center p-2`}
              >
                <div className="md:w-1/2 p-4 max-w-xl">
                  <h3 className="text-2xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 max-w-xl">
                    {service.description}
                  </p>
                </div>
                <div className="md:w-1/2 p-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={500}
                    height={500}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Services;
