const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        reqruired:[true,'please enter your product name '],
        trim:true,
        maxLength:[100,'product name cant be this long']
    },
    price:{
        type:Number,
        reqruired:[true,'please enter your product price '],
        maxLength:[6,'BRuh not this expensive 0.0'],
        default:0.0
    },
    description:{
        type:String,
        reqruired:[true,'please enter your product detail/description ']
    },
    ratings:{
        type:Number,
        default:0
    },
    //there will be multiple images of proucts that's why array of object
    images:[
        {
            //there has to be this because the website i use ask for public id(unique id ) n photo while upload
                public_id:{
                    type:String,
                    required:true
                },
                url:{
                    type:String,
                    required:true
                }
        }
    ],
    category:{
        type:String,
        required:[true,'please select a category for your  product'],
        //there must be a type of function or something declared for enum object values, it takes 
        //value and message as peremeter 
        enum:{
            values:[
                'Cloths',
                'technology',
                'beauty',
                'shoes',
                'toy',
                'food',
                'home'
            ],
            
            message:'Please select the correct category for product,there are no such catogery here bruh'

            
        }
    },
    seller:{
        type:String,
        required:[true,'please enter product seller, who r selling these 0o0']
    },
    stock:{
        type:Number,
        required:[true,'please enter product stock'],
        maxLength:[5,'bro owns the factory :@...still enter less no. of stocks'],
        default:0
    },
    numOfReviews:{
        type:Number,
        deafult:0
    },
    reviews:[
        {
            name:{
                type:String,
                rquired:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }

    

})

module.exports=mongoose.model('Product',productSchema)