import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
 
  users: defineTable({
    name: v.string(),
    email:v.string(),
    imageUrL:v.optional(v.string()),
    username:v.string(),
    createdAt:v.number()
,
lastActiveAt:v.number(),
    tokenIdentifier: v.string(),

  }).index("by_token", ["tokenIdentifier"])
  .index("by_email",["email"])
  .index("by_username",["username"])
  .searchIndex("search_name",{searchField:"name"})
  .searchIndex("search_email",{searchField:"email"})
  ,
  
});