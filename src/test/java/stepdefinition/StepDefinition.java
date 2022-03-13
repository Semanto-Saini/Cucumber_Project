package stepdefinition;

import java.util.Random;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hooks.hooked;
import junit.framework.Assert;

public class StepDefinition {
	WebDriver driver = hooked.driver;
	Random randomGenerator = new Random();  
	int randomInt = randomGenerator.nextInt(1000);
	String email = "Happy"+ randomInt +"@gmail.com";
	String cpnnm;
	String cd;
	public static String rndUserName() {
	    String SALTCHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	    StringBuilder salt = new StringBuilder();
	    Random rnd = new Random();
	    while (salt.length() < 8) { // length of the random string.
	        int index = (int) (rnd.nextFloat() * SALTCHARS.length());
	        salt.append(SALTCHARS.charAt(index));
	    }
	    String saltStr = salt.toString();
	    return saltStr;
	}
	 public static String rndPassword() {
		    String SALTCHARS = "0123456789@#$%*";
		    StringBuilder salt = new StringBuilder();
		    Random rnd = new Random();
		    while (salt.length() < 3) { // length of the random string.
		        int index = (int) (rnd.nextFloat() * SALTCHARS.length());
		        salt.append(SALTCHARS.charAt(index));
		    }
		    String saltStr = salt.toString();
		    return saltStr;
	    
	}
	 
	@Given("User navigates to facebook website")
	public void user_navigates_to_facebook_website() {
//		System.setProperty("webdriver.chrome.driver", ".\\lib\\chromedriver.exe");
//        driver = new ChromeDriver();
        driver.get("https://www.facebook.com/");
	    
	}

	@When("user enters the {string} and {string}")
	public void user_enters_the_and(String string, String string2) {
		driver.findElement(By.id("email")).sendKeys(string);
		driver.findElement(By.id("pass")).sendKeys(string2);
		
	    
	}

	@When("user clicks on the login button")
	public void user_clicks_on_the_login_button() {
		driver.findElement(By.name("login")).click();
	    
	}

	@Then("login message is displayed")
	public void login_message_is_displayed() {
		System.out.println("Login Failed");
	    
	}
	@Given("User navigates to uniform website")
	public void user_navigates_to_uniform_website() {
	    driver.get("http://uniformm1.upskills.in/admin/index.php?route=common/login");
	}

	@When("user enters  {string} and {string}")
	public void user_enters_and(String string, String string2) {
		driver.findElement(By.id("input-username")).sendKeys(string);
		driver.findElement(By.id("input-password")).sendKeys(string2);  
	}

	@When("User clicks on login button")
	public void user_clicks_on_login_button() {
		driver.findElement(By.xpath("//*[@id='content']/div/div/div/div/div[2]/form/div[3]/button")).click();
	}

	@Then("Dashboard is displayed")
	public void dashboard_is_displayed() {
	    System.out.println("Login Successfull");
	}
	@Given("User navigates to coupons section")
	public void user_navigates_to_coupons_section() throws InterruptedException {
	   Actions action = new Actions(driver);
	   WebElement share= driver.findElement(By.xpath("//li[@id='customer']/following-sibling::li"));
	   action.moveToElement(share).build().perform();
	   Thread.sleep(2000);
	   driver.findElement(By.xpath("//i[@class='fa fa-share-alt fa-fw']/parent::a/following-sibling::ul/li[3]")).click();
	}

	@When("user enters a {string} and {string}")
	public void user_enters_a_and(String coupon, String code) {
		cpnnm= coupon + rndUserName();
		cd= code + rndPassword();
		driver.findElement(By.xpath("//div[@class='pull-right']/a")).click();
		driver.findElement(By.id("input-name")).sendKeys(cpnnm);
		driver.findElement(By.id("input-code")).sendKeys(cd);
		
	}

	@When("Clicks on save button")
	public void clicks_on_save_button() throws InterruptedException {
		driver.findElement(By.xpath("//i[@class='fa fa-save']")).click();
		Thread.sleep(2000);
	}

	@Then("Coupon is successfully added")
	public void coupon_is_successfully_added() {
		String actual= driver.findElement(By.xpath("(//*[text()='"  + cd +"']/parent:: tr/td)[2]")).getText();
		System.out.println(actual);
		Assert.assertEquals(cpnnm, actual);
		
	}
	@When("user clcks the checkbox of coupon to be deleted")
	public void user_clcks_the_checkbox_of_coupon_to_be_deleted() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id='form-coupon']/div/table/tbody/tr[1]/td[1]/input")).click();
		Thread.sleep(2000);
	}

	@When("User clicks the delete icon and accept the pop up")
	public void user_clicks_the_delete_icon_and_accept_the_pop_up() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id='content']/div[1]/div/div/button")).click();
		Thread.sleep(3000);
		Alert alert = driver.switchTo().alert();
		Thread.sleep(1000);
		alert.accept();
		Thread.sleep(2000);
	}

	@Then("Coupon  successfully deleted")
	public void coupon_successfully_deleted() {
		String msg=driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
	    System.out.println(msg);
	}
	@When("User clicks the edit icon")
	public void user_clicks_the_edit_icon() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id='form-coupon']/div/table/tbody/tr[1]/td[8]/a")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//*[@id='input-name']")).clear();
		driver.findElement(By.xpath("//*[@id='input-code']")).clear();
	    Thread.sleep(3000);
	}
	@When("user enters a valid {string} and {string}")
	public void user_enters_a_valid_and(String string, String string2) {
	    cpnnm=string + rndUserName();
	    cd= string2 + rndPassword();
	    driver.findElement(By.id("input-name")).sendKeys(cpnnm);
		driver.findElement(By.id("input-code")).sendKeys(cd);
	}

	@Then("the row should be edited and added to database along with proper message")
	public void the_row_should_be_edited_and_added_to_database_along_with_proper_message() {
		String cnfrm=driver.findElement(By.xpath("//*[@id='content']/div[2]/div[1]")).getText();
	    System.out.println(cnfrm);
	}
	@Given("User navigates to affilliate section")
	public void user_navigates_to_affilliate_section() throws InterruptedException {
		Actions action = new Actions(driver);
		   WebElement share= driver.findElement(By.xpath("(//li[@id='customer']/following-sibling::li/a)[1]"));
		   action.moveToElement(share).build().perform();
		   Thread.sleep(2000);
		   driver.findElement(By.xpath("//*[@id='menu']/li[7]/ul/li[2]/a")).click();
		   Thread.sleep(2000);
	}

	@Then("User moves to add affiliate page")
	public void user_moves_to_add_affiliate_page() {
		driver.findElement(By.xpath("//div[@class='pull-right']/a")).click();
	    
	}

	@Then("User enters all required fields {string} {string} {string} {string} {string} {string} {string} {string}")
	public void user_enters_all_required_fields(String string, String string2, String string3, String string4, String string5, String string6, String string7, String string8) {
		driver.findElement(By.id("input-firstname")).sendKeys(string);
		driver.findElement(By.id("input-lastname")).sendKeys(string2);
        driver.findElement(By.id("input-email")).sendKeys(email);
		driver.findElement(By.id("input-telephone")).sendKeys(string3);
        driver.findElement(By.id("input-password")).sendKeys(string4);
		driver.findElement(By.id("input-confirm")).sendKeys(string5);
        driver.findElement(By.id("input-address-1")).sendKeys(string6);
		driver.findElement(By.id("input-city")).sendKeys(string7);
		driver.findElement(By.id("input-postcode")).sendKeys(string8);

	}

	@Then("Selects the country and region")
	public void selects_the_country_and_region() throws InterruptedException {
		WebElement obj = driver.findElement(By.xpath("//*[@id='input-country']"));
		Select sel = new Select(obj);
		sel.selectByValue("99");
		Thread.sleep(3000);
		WebElement obj1 = driver.findElement(By.xpath("//*[@id='input-zone']"));
		Select sel1 = new Select(obj1);
		sel1.selectByValue("1493");

	}

	@Then("Move to payment details")
	public void move_to_payment_details() {
		driver.findElement(By.xpath("//*[@id='form-affiliate']/ul/li[2]/a")).click();
	}

	@Then("Enters {string}")
	public void enters(String string) {
		driver.findElement(By.xpath("//*[@id='input-cheque']")).sendKeys(string);
	}

	@Then("Click on Save button")
	public void click_on_Save_button() throws InterruptedException {
		driver.findElement(By.xpath("//i[@class='fa fa-save']")).click();
		Thread.sleep(4000);
	}

	@Then("the above entered information should be added and verified with email")
	public void the_above_entered_information_should_be_added_and_verified_with_email() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id='input-email']")).sendKeys(email);
		driver.findElement(By.xpath("//*[@id='button-filter']")).click();
		String actual = driver.findElement(By.xpath("//*[@id='form-affiliate']/div/table/tbody/tr[1]/td[3]")).getText();
		Assert.assertTrue(actual.contains(email));
		Thread.sleep(5000);
	}
    
	@Then("fills the {string} {string}")
	public void fills_the(String string, String string2) {
		driver.findElement(By.xpath("//*[@id='input-name']")).sendKeys(string);
		driver.findElement(By.xpath("//*[@id='input-date-added']")).sendKeys(string2);
		driver.findElement(By.xpath("//*[@id='input-email']")).sendKeys("bei989@gmail.com");
	}

	@Then("clicks on Filter button")
	public void clicks_on_Filter_button() throws InterruptedException {
		driver.findElement(By.xpath("//*[@id='button-filter']")).click();
		Thread.sleep(4000);
	}

	@Then("Expected results should be displayed")
	public void expected_results_should_be_displayed() {
		String actual = driver.findElement(By.xpath("//*[@id='form-affiliate']/div/table/tbody/tr/td[2]")).getText();
		Assert.assertTrue(actual.contains("pop"));
	}
}