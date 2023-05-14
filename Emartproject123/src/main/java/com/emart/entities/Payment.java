package com.emart.entities;



import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="payment")
public class Payment 
{
	private int payment_Id;
	//private int order_Id;
	private String payment_Type;
	private double amount;
	private Orders Orders;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="order_Id")
	public Orders getOrders() {
		return Orders;
	}


	public void setOrders(Orders orders) {
	Orders = orders;
	}


	/**
	 * 
	 */
	public Payment() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	/**
	 * @param payment_Id
	
	 * @param payment_Type
	 * @param amount
	 */
	
	/**
	 * @return the payment_Id
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getpayment_Id() {
		return payment_Id;
	}
	public Payment(int payment_Id, String payment_Type, double amount, Orders orders) {
		super();
		this.payment_Id = payment_Id;
		this.payment_Type = payment_Type;
		this.amount = amount;
		Orders = orders;
	}


	/**
	 * @param payment_Id the payment_Id to set
	 */
	public void setpayment_Id(int payment_Id) {
		this.payment_Id = payment_Id;
	}
	/**
	 * @return the payment_Type
	 */
	public String getpayment_Type() {
		return payment_Type;
	}
	/**
	 * @param payment_Type the payment_Type to set
	 */
	public void setpayment_Type(String payment_Type) {
		this.payment_Type = payment_Type;
	}
	
	/**
	 * @return the amount
	 */
	public double getamount() {
		return amount;
	}
	/**
	 * @param amount the amount to set
	 */
	public void setamount(double amount) {
		this.amount = amount;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Product [payment_Id=" + payment_Id + ", payment_Type=" + payment_Type + ", amount=" + amount + "]";
	};
	
}
