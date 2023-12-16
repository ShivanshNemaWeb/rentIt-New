//Add a Testimonial
const Testimonial = require('../models/testimonial');
const User = require('../models/user');

exports.addTestimonial = async(req,res) => {
const {userId,storeId,stars,detail} = req.body;
try{
const testimonial =  new Testimonial({
    userId,storeId,stars,detail
})
await testimonial.save();
return res.status(200).send(testimonial);
}
catch(error){
return res.status(401).send({message:"Something Went Wrong"});
}
}

exports.getTestimonials = async (req, res) => {
    const { storeId } = req.params;
  
    try {
      const testimonials = await Testimonial.find({ storeId });
      
      const response = await Promise.all(testimonials.map(async (testimonial) => {
        const user = await User.findOne({ userId: testimonial.userId });
        return {
          user: user,
          testimonial: testimonial
        };
      }));
  
      return res.status(200).send(response);
    } catch (error) {
      return res.status(401).send({ message: "Something Went Wrong" });
    }
  };
  