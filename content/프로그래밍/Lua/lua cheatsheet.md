---
title: lua cheatsheet
tags:
  - 루아
date: 2023-11-19
---
---

```lua
-- data type
--[[
2: number
"Hello World!": string
false: boolean
nil: nil
]]
local a = 3.0
print(type(a)) -- Number

-- Operators
10 + 2
10 - 2
3 * 3
64 / 4
4 ^ 3
16 % 3
-3


a = 2
print("I know " .. a .. "languages")
-- I know 2 languages (String)
print("1" + 1) -- (Number)

a = "2"
b = 2

tostring(b)
tonumber(a)

-- if else
if isTrue then
	print("this is true")
elseif isHalfTrue then
	print("not sure")
else
	print("this is false")
end

-- comparison
-- <, >, >=, <=, ==, ~=

-- function
function exFunc(a):
	return a * 2
end

local i = 0
local count = 0
while i <= 10 do
	count = count + 1
	if condition then
		break
	end
end

count = 0 
for i=1, 10, 2 do
	count = count + 1
end

repeat
	...
until condition

-- table

local colors = {"red", "green", "blue"}

print(colors[1]) --red
print(colors[2]) --green
print(colors[3]) --blue

for i=1, #colors do 
	print(colors[i])
end

table.insert(colors, "orange")
table.insert(colors, 2, "pink")
table.remove(colors, 1)

local anytypes = {"any", {1, 2}, 2, true, nil}
local dict = {"one"=1, "two"=2}

--This can be used to return multiple values from a functions
function getTeamScores()
  local scores = {
    ["teamA"] = 12,
    ["teamB"] = 15
  }
	return scores
end

local scores = getTeamScores()
local total = 0
for key, val in pairs(scores) do
	total = total + val
end
print("Total score of all teams:" .. total)

local tab = {x=1, y=2}
local tab2 = {[3]=3, ["hi"]=2}
local a = tab.x
local b = tab.y
local c = tab['x']
local d = tab['y']

mytable = { x = 2, y = function() return "Hello, world!" end }
print(mytable.y(mytable)) -- Output: Hello, world!
print(mytable:y()) -- Output: Hello, world!
print(mytable.y(mytable, 3, 4)) -- Output: Hello, world!
print(mytable:y(3, 4)) -- Output: Hello, world!


function X:y(z) 
	return "This is a method with argument: " .. z 
end

function X.y(self, z) 
	return "This is an explicit method with argument: " .. z
end

local myObject = { } 
print(X:y(myObject, "example"))  
-- Output: This is a method with argument: example 
print(myObject:y("example"))     
-- Output: This is an explicit method with argument: example

-- metatable
mt = {}

mt.__tostring = function() return "str" end
mt.__add = function(b) ... end
mt.__mul = function(b) ... end
mt.__index = function(k) ... end 
mt.__newindex = function(k, v) ... end


-- class

Account = {}

function Account:new(balance)
	local t = setmetatable({}, {__index=Account})

	t.balance = (balance or 0)
	return t
end

function Account:withdraw(amount)
	print("Withdrawing" .. amount .. "...")
	self.balance = self.balance - amount
	self:report()
end

function Account:report()
	print("Your current balance is: " .. self.balance)
end

a = Account:new(9000)
a:withdraw(200)


-- API

--[[
dofile("hello.lua")
loadfile("hello.lua")

assert(x)    -- x or (raise an error)
assert(x, "failed")

type(var)  
-- "nil" | "number" | "string" | "boolean" | "table" | "function" | "thread" | "userdata"

-- Does /not/ invoke meta methods (__index and __newindex)
rawset(t, index, value)    -- Like t[index] = value
rawget(t, index)           -- Like t[index]

_G  -- Global context
setfenv(1, {})  
-- 1: current function, 2: caller, and so on -- {}: the new _G

pairs(t)     -- iterable list of {key, value}
ipairs(t)    -- iterable list of {index, value}

tonumber("34")
tonumber("8f", 16)


'string'..'concatenation'

s = "Hello"
s:upper()
s:lower()
s:len()    -- Just like #s

s:find()
s:gfind()

s:match()
s:gmatch()

s:sub()
s:gsub()

s:rep()
s:char()
s:dump()
s:reverse()
s:byte()
s:format()


table.foreach(t, function(row) ... end)
table.setn
table.insert(t, 21)          -- append (--> t[#t+1] = 21)
table.insert(t, 4, 99)
table.getn
table.concat
table.sort
table.remove(t, 4)



math.abs     math.acos    math.asin       math.atan    math.atan2
math.ceil    math.cos     math.cosh       math.deg     math.exp
math.floor   math.fmod    math.frexp      math.ldexp   math.log
math.log10   math.max     math.min        math.modf    math.pow
math.rad     math.random  math.randomseed math.sin     math.sinh
math.sqrt    math.tan     math.tanh

math.sqrt(144)
math



io.output(io.open("file.txt", "w"))
io.write(x)
io.close()

for line in io.lines("file.txt")

file = assert(io.open("file.txt", "r"))
file:read()
file:lines()
file:close()

]]

```


---

- https://devhints.io/lua
