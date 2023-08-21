using AuctionService.Entities;

namespace AuctionService.UnitTests;

public class AuctionEntityTest
{
    //Method_Scenario_ExpectedResult
    [Fact]
    public void HasReservePrice_ReservePriceGtZero_True()
    {
        //arrange
        var auction = new Auction
        {
            Id = new Guid(),
            ReservePrice = 10
        };
        
        //act
        var result = auction.HasReservePrice();
        
        //Assert
        Assert.True(result);
    }
}