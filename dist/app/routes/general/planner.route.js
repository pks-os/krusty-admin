"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var planner_mw_1 = require("../../middlewares/general/planner.mw");
exports.PlannerRouter = express_1.Router();
exports.PlannerRouter.get('/planner/:admin', planner_mw_1.Planner);
exports.PlannerRouter.get('/planner/:admin/projects', planner_mw_1.GetProjects);
exports.PlannerRouter.post('/planner/create/', planner_mw_1.CreateProject);
exports.PlannerRouter.post('/planner/tasks/create', planner_mw_1.CreateTask);
exports.PlannerRouter.post('/planner/invite', planner_mw_1.InviteToProject);
exports.PlannerRouter.patch('/planner/tasks/update', planner_mw_1.UpdateTask);
