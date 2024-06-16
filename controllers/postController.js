const Post = require("../models/posts");
const User = require("../models/user");

const asyncHandler = require("express-async-handler");
const { body, validatiionResult } = require("express-validator");

exports.post = asyncHandler(async (req, res, next) => {});
