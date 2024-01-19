import nodemailer from 'nodemailer';
import membershipModel from '../models/membershipModel.js';

// Import your membershipModel if it's defined in a separate file

export const createMembership = async (req, res) => {
  try {
    // Assuming you have a contact model defined
    const { membershipfor, businessName, ownerName, address, pincode, contactNo, plan, message } = req.body;
    const member = new membershipModel({ membershipfor, businessName, ownerName, address, pincode, contactNo, plan, message});
    await member.save();

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'GMAIL', // e.g., 'Gmail'
      auth: {
        user: 'info.mcs01@gmail.com', 
        pass: 'rldh vaxy dcjx zngi',  // Your email password or app-specific password
      },
      tls: {
        rejectUnauthorized: false, // Disable SSL certificate validation
      },
    });

    // Define email data
    const mailOptions = {
      from: req.body.email,    // Sender's email address
      to: 'info.mcs01@gmail.com', // Recipient's email address
      subject: 'New Membership Form Submission',
      text: `
        Membership For: ${membershipfor}
        Business Name: ${businessName}
        Owner Name: ${ownerName}
        Address: ${address}
        Pincode: ${pincode}
        Contact No: ${contactNo}
        Plan : ${plan}
        Message: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(201).json(member);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



/* export const createContact = async (req, res) => {
  try {
    const user = new membershipModel(req.body)
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}; */

// Read all users
export const ReadMembership =  async (req, res) => {
  try {
    const member = await membershipModel.find();
    res.json(member);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Read user by ID
 export const ReadMembershipById = async (req, res) => {
  try {
    const member = await membershipModel.findById(req.params.id);
    if (!member) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(member);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update user by ID
export const UpdateMembership =  async (req, res) => {
  try {
    const member = await membershipModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!member) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(member);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete user by ID
export const DeleteMembership =  async (req, res) => {
  try {
    const member = await membershipModel.findByIdAndDelete(req.params.id);
    if (!member) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


