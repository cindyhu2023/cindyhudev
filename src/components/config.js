
const ENGINEERING = "Engineering";
const DESIGN = "UX Design";
const RESEARCH = "Research";

export const projectSection = [ENGINEERING, DESIGN, RESEARCH]

export const projectList = [
    {
        "url": "/meta",
        "title": "Facebook URL Sharing",
        "img": "meta.png",
        "description": "Software engineering internship project: APIs for measuring URL sharing on Facebook ",
        "sections": [ENGINEERING],
        "tags": [[ENGINEERING, "Backend"]],
    },
    {
        "url": "/amazon",
        "title": "Optimization Service on AWS ECS",
        "img": "amazon.png",
        "description": "Software engineering internship project: Infrastructure As Code architecture for optimization service on AWS ECS",
        "sections": [ENGINEERING],
        "tags": [[ENGINEERING, "Backend"]],
    },
    {
        "url": "/flappy-phone",
        "title": "Flappy Phone",
        "img": "flappy-phone.png",
        "description": "A game that uses your phone's accelerometer to control the bird!",
        "sections": [ENGINEERING],
        "tags": [[ENGINEERING, "Full Stack"]],
    },
    {
        "url": "/cerebro",
        "title": "Cerebro: Opportunistic Collective Experience",
        "img": "cerebro.png",
        "description": "A HCI research project on connecting people digitally with small moments in everyday life",
        "sections": [ENGINEERING, DESIGN, RESEARCH],
        "tags": [[ENGINEERING, "Full Stack"], [DESIGN, "UX Design"], [RESEARCH, "HCI Research"]],
    },
    {
        "url": "/tiktok",
        "title": "TikTok Monthly Recap",
        "img": "tiktok.png",
        "description": "A UX design project on improving TikTok algorithm through monthly recap experience",
        "sections": [DESIGN],
        "tags": [[DESIGN, "UX Design"]],
    },
    {
        "url": "/doordash",
        "title": "DoorDash VIP Experience",
        "img": "doordash.png",
        "description": "A UX design project on improving the DoorDash VIP experience",
        "sections": [DESIGN],
        "tags": [[DESIGN, "UX Design"]],
    }
]
