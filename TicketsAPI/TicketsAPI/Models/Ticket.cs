using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TicketsAPI.Models
{
    public class Ticket
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        [Required]
        public string Provider { get; set; }
        [Required]
        [Column(TypeName = "decimal(28,10)")]
        public decimal Amount { get; set; }
        [Required]
        public string Currency { get; set; }
        [Required]
        public DateTime Date { get; set; }
        [Required]
        public string Comment { get; set; }
    }
}
