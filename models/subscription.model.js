import mongoose from "mongoose";

const SubscriptionSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , " Subscription Name is Required"],
        trim:  true,
        minLenghth : [3 , " Subscription Name must be at least 3 characters long"],
        maxLength : [100 , " Subscription Name must be at most 100 characters long"]
    },
    price : {
        type : Number,
        required : [true , " Price is Required"],
        min : [0 , " Price must be at least 0"]
    },
    billingCycle : {
        type : String,
        enum : ["monthly" , "yearly"],
        default : "monthly"
    },
    category : {
        type : String,
        enum : ["entertainment" , "education" , "productivity" , "other"],
        default : "other"
    },
    paymentMethod : {
        type : String,
        enum : ["credit_card" , "debit_card" , "paypal" , "other"],
        default : "other"

    },
    status : {
        type : String,
        enum : ["active" , "inactive" , "canceled"],
        default : "active"
    },
    startDate : {
        type : Date,
        required : [true , " Start Date is Required"],
        validate : {
            validator : function(value) {
                return value <= new Date();
            },
            message : " Start Date cannot be in the future"
        }
    },
    endDate : {
        type : Date,
        required : false,
        validate : {
            validator : function(value) {
                return !value || value >= this.startDate;
            },
            message : " End Date cannot be before Start Date"
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index : true

    }

} , { timestamps : true});

SubscriptionSchema.pre("save" , function (next) {
    if(!this.endDate){
        const renewalPeriod = {"monthly":30 , "yearly":365};

        this.endDate = new Date( this.startDate);
        this.endDate.setDate(
          this.endDate.getDate() + renewalPeriod[this.billingCycle]
        );

    }

    if(this.endDate < new Date()){
        this.status = "inactive";

    }
})

const Subscription = mongoose.model("Subscription" , SubscriptionSchema);

export default Subscription; 