namespace AuctionService.Entities;

public class Item
{
    public Guid Id { get; set; }
    public string Make { get; set; }
    public string Model { get; set; }
    public int Year { get; set; }
    public string Colour { get; set; }
    public int Kilometer { get; set; }
    public string ImageUrl { get; set; }
    
    public Auction Auction { get; set; }
    public Guid AuctionId { get; set; }
}