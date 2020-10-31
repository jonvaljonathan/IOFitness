const mongoose = require('mongoose');
const Progression = require('../Progression');
const updateDB = require('../../../lib/updateDB');

require('dotenv').config();

const progressionDB = [
    {
    name: 'Deadlift', 
    type: 'Deadlift',
    progression: [
        'Quadruped Hip Hinge', 
        'Dowel Hip Hinge',
        'Hip Hinge', 
        'Romanian Deadlift', 
        'Deadlift', 
        'Kettlebell Swing', 
        'Single Arm Kettlebell Swing'
    ],
    eccentricMovement: ['hipFlexion', 'kneeFlexion'],
    conecntricMovement: ['hipExtension', 'kneeExtension'],
    faultList: [
        'anklePronation',
        'ankleDorsiflexion',
        'kneeFlexion',
        'lumbarFlexion',
        'lumbarExtension',
        'scapularProtraction',
        'thoracicFlexion',
        'cervicalExtension',
        'disconnectedSpine',
    ]},
    { 
    name: 'Single Leg Deadlift',
    type: 'Single Leg Deadlift',
    progression: [
        'Supported Kickstand Hip Hinge', 
        'Kickstand Hip Hinge', 
        'Supported Single Leg Deadlift', 
        'Supported Single Leg Deadlift w/ Airplane', 
        'Supported Single Leg Deadlift w/ Airplane and High Knee', 
        'Bodyweight Single Leg Deadlift', 
        'Bodyweight Single Leg Deadlift w/ Airplane', 
        'Bodyweight Single Leg Deadlift w/ Airplane and High Knee', 
        'Single Leg Deadlift',
    ]},
    {
        name: 'Squat', 
        type: 'Squat',
        progression: [
            'Assisted Box Squat', 
            'Banded Assisted Box Squat', 
            'Assisted Squat', 
            'Banded Assisted Squat', 
            'Bodyweight Box Squat', 
            'Bodyweight Banded Box Squat', 
            'Goblet Box Squat', 
            'Goblet Squat'
        ],
        eccentricMovement: ['ankleDorsiflexion', 'kneeFlexion', 'hipFlexion', 'hipExternalRoation'],
        concentricMovement: ['anklePlantarflexion', 'kneeExtension', 'hipExtension'],
        faultList: [
            'raised heals',
            'anklePronation',
            'hipInteralRotation',
            'lumbarFlexion',
            'lumbarExtension',
            'cervicalExtension',
            'thoracicFlexion',
            'bilateralAsymetry',
        ],
    },
    {
        name: 'Lunge', 
        type: 'Single Leg Squat',
        progression: [
            'Assisted Split Squat',
            'Assisted Reverse Lunge Slide',
            'Bodyweight Split Squat',
            'Bodyweight Reverse Lunge Slide',
            'Bodyweight Reverse Lunge',
            'Goblet Reverse Lunge',
            'Farmer Reverse Lunge',
        ],
        eccentricMovement: ['kneeFlexion', 'hipFlexion'],
        concentricMovement: ['kneeExtension', 'hipExtension'],
        faultList: [
            'anklePronation',
            'ankleSupination',
            'externalHipRotation',
            'internalHipRotation',
            'lumbarFlexion',
            'lumbarExtension',
            'thoracicFlexion',
            'thoracicRoation',
            'hipInstability',
        ],
    },
    {
    name: 'Scapular and Shoulder Coordination',
    progression: [
        'Supine Shoulder Retraction and Protraction',
        'Supine Shoulder Elevation and Depression',
        'Standing Elevation and Depression',
        'Standing Protraction and Retraction',
        'Standing Single Shoulder Protraction and Retraction',
        'Standing Single Shoulder Elevation and Depression',
        'Door Frame Pectoral Stretch',
        'Door Frame Overhead Stretch',
        'Palms Turn Up',
        'Bent Elbows External Rotation',
        'Shoulder Rolls',
        'Dowel Up and Over',
        'Arm Circles',
        'Quadruped Hold',
        'Quadruped Shoulder Taps',
        'Quadruped Scap Pushup',
        'Quadruped Single Arm Scap Pushup',
        'Single Arm Scap Row',
        'Double Arm Scap Row',
        'Elevated Plank',
        'Elevated Scap Pushup',
        'Elevated Side Plank',
        'Elevated Side Plank Scap Pushup',
        'Assisted Hang',
        'Assisted Scap Pullup',
        'Assisted Dip Hold',
        'Assisted Scap Dip',
        'Austalian Plank',
        'Austalian Scap Pushup',
        'Plank',
        'Plank Scap Pushup',
        'Plank Shoulder Tap',
        'Side Plank Scap Pushup',
        'Hang',
        'Scap Pullup',
        'Dip Hold',
        'Scap Dip',    
    ]},
    {
    name: 'Overhead Press', 
    type: 'Vertical Press',
    progression: [
        'Standing Down Dog',
        'Supine Arm Raises',
        'Foam Roller Up the Wall',
        'Elbows in Overhead Reach',
        'Underhand Overhead Reach',
        'Single Arm Overhead Press',
        'Double Arm Overhead Press',
    ],
    eccentricMovement: ['shoulderFlexion', 'elbowFlexion'],
    concentricMovement: ['shoulderExtension', 'elbowExtension'],
    faultList: [
        'anklePronation',
        'ankleSupination',
        'lumbarExtension',
        'lumbarFlexion',
        'thoracicFlexion',
        'thoracicRoation',
        'hipInstability',
        'frontalPlaneInstability',
        'elbows out',
        'head forward',
    ],    
},
    {
    name: 'Row',
    type: 'Horizontal Row',
    progression: [
        'Single Arm Scap Row',
        'Double Arm Scap Row',
        'Australian Plank',
        'Australian Scap Pushup',
        'Horizontal Row',  
        'Australian Pushup',
        'Bent Over Row',
    ],
    eccentricMovement: ['shoulderFlexion', 'elbowFlexion'],
    concentricMovement: ['shoulderExtension', 'elbowFlexion'],
    faultList: [
        'hipInternalRotation',
        'lumbarFlexion',
        'thoracicFlexion',
        'cervicalExtension',
        'scapularWinging',
        'shoulderElevation',
        'shoulderRollForward',
    ],    
},
    {
    name: 'Pushup',
    type: ' Horizontal Press',
    progression: [
        'Quadruped Hold',
        'Quadruped Shoulder Taps',
        'Quadruped Scap Pushup',
        'Elevated Plank',
        'Elevated Side Plank',
        'Elevated Scap Pushup',
        'Elevated Pushup',
        'Side Plank',
        'Plank',
        'Pushup',
        'Feet Elevated Plank',
        'Feet Elevated Side Plank',
        'Feet Elevated Pushup',
    ],
    eccentricMovement: ['shoulderExtension', 'elbowFlexion'],
    concentricMovement: ['shoulderFlexion', 'elbowExtension'],
    faultList: [
        'lumbarFlexion',
        'lumbarExtension',
        'thoracicFlexion',
        'cervicalExtension',
        'elbows out',
        'open-hand',
    ],
    },
    { 
    name: 'Pullup',
    type: 'Vertical Row',
    progression: [
        'Assisted Hang',
        'Assisted Scap Pullup',
        'Hang',
        'Scap Pullup',
        'Assisted Pullup',
        'Pullup',
        'Weighted Pullup',
    ],
    eccentricMovement: ['shoulderFlexion', 'elbowExtension'],
    concentricMovement: ['shoulderExtension', 'elbowFlexion'],
    faultList: [
        'lumbarExtension',
        'cervicalExtension',
        'shoulderElevation',
        'shoulderRollForward',
    ],
    },
    {
    name: 'Dip',
    type: 'Vertical Press',
    progression: [
        'Assisted Dip Hold',
        'Assisted Scap Dip',
        'Dip Hold',
        'Scap Dip',
        'Assisted Dip',
        'Dip',
        'Weighted Dip'
    ],
    eccentricMovement: ['shoulderExtension', 'elbowFlexion'],
    concentricMovement: ['shoulderFlexion', 'elbowExtension'],
    faultList: [
        'lumbarExtension',
        'thoracicExtension',
        'cervicalExtension',
        'shoulderElevation',
        'shouldersRollForward',
        'scapularWinging',
        'elbows out',
    ],
    },
    { 
    name: 'Spine Mobility and Awareness',
    progressoin: [
        'Supine Pelvic Tilt',
        'Supine Pelvic Hip to Ribs',
        'Supine Pelvic Clock',
        'Supine Thoracic Spine Extension',
        'Supine Thoracic Spine Rotation',
        'Quadruped Hold',
        'Quadruped Pelvic Tilt',
        'Quadruped Cat Cow',
        'Quadruped Segmented Cat Cow',
        'Quadruped Controlled Rock',
        'Quadruped Thread the Needle',
        'Sitting QL Stretch',
        'Cobra',
        'Frog Cobra',
        'Frog Rock',
        'Gut Smash',
        'Bracing Sequence',
        'Standing Pelvic Tilt',
        'Standing Hip Dip',
        'Standing Pelvic Clock',
        'Standing Hip Hinge',
    ]},
    {
    name: 'Glute Activation',
    progression: [
        'Supine Glute Squeeze',
        'Supine Independent Glute Squeeze',
        'Standing Glute Squeeze',
        'Standing Independent Glute Squeeze',
        'Supine Hip Thruster',
        'Supine Single Leg Isometric Hip Thruster',
        'Supine Single Leg Eccentric Hip Thruster',
        'Supine Single Leg Hip Thruster',
        'Quadruped Fire Hydrant',
        'Quadruped Kick Back',
        'Standing Glute Kickback',
        'Lateral Monster Walk',
        '90/90 Hip Lift',
    ]},
    { 
    name: 'Hip Mobility',
    progression: [
        'Hip Swivel Holds',
        'Supine Figure Four',
        'Supine Butterfly',
        'Hip Swivels',
        'Standing Hip Flexor',
        'Lunge Hip Flexor',
        'Quadruped Abductor',
        'Quadruped Abductor Rock',
        'Supported 90/90',
        '90/90 Hold',
        'Pigeon',
        'Couch Stretch',
        '90/90 Switch',
    ]},
    { 
    name: 'Core Strength and Stability',
    progression: [
        'Deadbug Knees Bent Slide',
        'Deadbug Alternating Knee Raise',
        'Deadbug Alternating Kick',
        'Deadbug Double Leg Kick',
        'Deadbug Alternating Straight Leg Raise',
        'Deadbug Double Leg Raise',
        'Quadruped Shoulder Taps',
        'Quadruped Kick Back',
        'Quadruped Thread the Needle',
        'Quadruped Fire Hydrant',
        'Bird Dog',
        'Modified Curl Up',
        'Elevated Plank',
        'Elevated Side Plank',
        'Plank',
        'Side Plank',
    ]},
    { 
    name: 'Foot And Arch', 
    progression: [
        'Mid Foot Mobilization',
        'Toe Mobilization',
        'Arch Builder',
        'Toe Plank',
        'Standing Pronation Supination',
        'Standing Arch Activation',
        'Standing Lacrosse Ball Arch Mobilization',
        'Stair Calf Stretch',
        'Staggered Stance',
        'Staggered Dorsiflexion',
        'Staggered Stance Step',
        'Lateral Step',
        'High Knee',
    ]},
    { 
    name: 'Breathing', 
    progression: [
        'Supine 5.5 Nasal Breathing',
        'Supine Diaphragmatic Breathing',
        'Supine 360 Diaphragmatic Breathing',
        'Supine Rev Up Breathing',
        'Supine Rev Down Breathing',
        'Supine Braced Breathing',
        'Tuomo Breathing',
        'Standing Braced Diaphragmatic Breathing',
        'Standing Rev Up Braced Breathing',
        'Farmer Carry Breathing',
        'Suitcase Carry Breathing',
        'Hip Hinge Breathing',
        'Squat Breathing',
        'Row Breathing',
        'Pushup Breathing',
        'Pullup Breathing',
        'Overhead Press Breathing',
    ]},
    { 
    name: 'Balance And Stance',
    progression: [
        'Bracing Sequence',
        'Bracing Sequence Weight Shift',
        'Wide Stance Bracing Sequence',
        'Wide Stance Bracing Sequence Weight Shift',
        'Staggered Stance Bracing Sequence',
        'Staggered Stace Weight Shift',
        'Single Leg Balance',
        'Single Leg Forward and Backward Slide',
        'Single Leg Lateral Slide',
        'Single Leg Deadlift Kick Stand',
        'High Knee',
        'Half Moon Slide',
        'Forward and Backward Swing',
        'Lateral Swing',
        'Star Step',
        'Single Leg Deadlift',
        'Single Leg Deadlift to High Knee',
        'Single Leg Deadlift with Airplane',
        'Single Leg Deadlift with Airplane to High Knee',
        'Standing Hip CAR'
    ]},
    { 
    name: 'Carry Progression', 
    progression: [
        'Farmer Carry',
        'Suitcase Carry',
        'Goblet Carry',
        'Front Rack Carry',
        'Bilateral Overhead Carry',
        'Unilateral Overhead Carry',
        'Unilateral Bottoms Up Front Rack Carry',
        'Bilateral Bottoms Up Front Rack Carry',
        'Unilateral Bottoms Up Overhead Carry',
        'Bilateral Bottoms Up Overhead Carry',
    ]},
];

updateDB(Progression, progressionDB);
