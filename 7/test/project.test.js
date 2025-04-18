const expect = require("chai").expect;
const request = require("request");

describe("Project API Tests", function () {
    const baseUrl = "http://localhost:3004";

    it("should return status 200 for homepage", function (done) {
        request(baseUrl, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it("should fetch all projects", function (done) {
        request(`${baseUrl}/api/projects`, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            const resBody = JSON.parse(body);
            expect(resBody).to.have.property("data");
            done();
        });
    });

    it("should save user form data", function (done) {
        request.post(
            {
                url: `${baseUrl}/api/users`,
                json: {
                    first_name: "Test",
                    last_name: "User",
                    email: "test@example.com",
                    password: "1234"
                }
            },
            function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(body).to.have.property("message").that.includes("successfully");
                done();
            }
        );
    });
});
