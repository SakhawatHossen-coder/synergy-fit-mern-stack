import React, { useEffect, useState } from "react";
import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";

const CustomerList = ({ payments }) => {
  const [total, setTotal] = useState([]);
  const calculateTotal = () => {
    const newTotal = payments.reduce((acc, current) => acc + current.price, 0);
    setTotal(newTotal);
  };

  // Calling calculateTotal on component mount or when payments change
  useEffect(() => {
    calculateTotal();
  }, [payments]);

  let defImg =
    "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg";
  return (
    <Card className="w-96">
      <CardBody>
        <div className="mb-4 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="">
            Latest Customers
          </Typography>
          <Typography variant="small" color="blue" className="font-bold">
            Grand Total={total} $
          </Typography>
        </div>
        <div className="divide-y divide-gray-200">
          {payments.map(({ name, email, price, photo }, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between pb-3 pt-3 last:pb-0"
              >
                <div className="flex items-center gap-x-3">
                  <Avatar size="sm" src={photo || defImg} alt={name} />
                  <div>
                    <Typography color="blue-gray" variant="h6">
                      {name || "Anonymus"}
                    </Typography>
                    <Typography variant="small" color="gray">
                      {email}
                    </Typography>
                  </div>
                </div>
                <Typography color="blue-gray" variant="h6">
                  ${price}
                </Typography>
              </div>
            );
          })}
        </div>
      </CardBody>
    </Card>
  );
};

export default CustomerList;

const customers = [
  {
    name: "Tania Andrew",
    email: "tania@gmail.com",
    price: 400,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
  },
  {
    name: "John Micheal",
    email: "john@gmail.com",
    price: 420,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-6.jpg",
  },
  {
    name: "Alexa Liras",
    email: "alexa@gmail.com",
    price: 340,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
  },
  {
    name: "Richard Gran",
    email: "richard@gmail.com",
    price: 520,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
  },
  {
    name: "Micheal Levi",
    email: "levi@gmail.com",
    price: 780,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
  },
];
