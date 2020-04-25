const { Schema, model } = require('mongoose');
//just testing pull requests
const PostSchema = new Schema({
    body: String,
    community_id: String,
    country_id: Number,
    created_at: String,
    feeling_id: Number,
    id: Number,
    is_autopost: {
      type: Number,
      default: 0
    },
    is_community_private_autopost: {
        type: Number,
        default: 0
    },
    is_spoiler: {
        type: Number,
        default: 0
    },
    is_app_jumpable: {
        type: Number,
        default: 0
    },
    empathy_count: {
        type: Number,
        default: 0
    },
    language_id: {
        type: Number,
        default: 1
    },
    mii: String,
    mii_face_url: String,
    number: {
        type: Number,
        default: 1
    },
    pid: Number,
    platform_id: Number,
    region_id: Number,
    reply_count: {
        type: Number,
        default: 0
    },
    screen_name: String,
    title_id: Number,
});


PostSchema.methods.upEmpathy = async function() {
    const empathy = this.get('empathy_count');
    this.set('empathy_count', empathy + 1);

    await this.save();
};

PostSchema.methods.downEmpathy = async function() {
    const empathy = this.get('empathy_count');
    this.set('empathy_count', empathy - 1);

    await this.save();
};

const MiiversePost = model('MiiversePost', PostSchema);

module.exports = {
    PostSchema,
    MiiversePost
};