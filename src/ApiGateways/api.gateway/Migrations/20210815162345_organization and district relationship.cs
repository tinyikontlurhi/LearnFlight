using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace api.gateway.Migrations
{
    public partial class organizationanddistrictrelationship : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "installationDate",
                table: "Devices");

            migrationBuilder.CreateTable(
                name: "DistrictOrganization",
                columns: table => new
                {
                    districtsId = table.Column<int>(type: "integer", nullable: false),
                    organizationsId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DistrictOrganization", x => new { x.districtsId, x.organizationsId });
                    table.ForeignKey(
                        name: "FK_DistrictOrganization_District_districtsId",
                        column: x => x.districtsId,
                        principalTable: "District",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DistrictOrganization_Organizations_organizationsId",
                        column: x => x.organizationsId,
                        principalTable: "Organizations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DistrictOrganization_organizationsId",
                table: "DistrictOrganization",
                column: "organizationsId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DistrictOrganization");

            migrationBuilder.AddColumn<DateTime>(
                name: "installationDate",
                table: "Devices",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
