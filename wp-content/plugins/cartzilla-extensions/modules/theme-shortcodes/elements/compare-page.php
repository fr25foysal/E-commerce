<?php

if( ! function_exists( 'cartzila_compare_page_shortcode' ) ) {
	
	function cartzila_compare_page_shortcode() {
		ob_start();
		if( class_exists( 'YITH_Woocompare_Frontend' ) ) {
			global $yith_woocompare;
			
			if( function_exists( 'cartzilla_get_template' ) ) {
				cartzilla_get_template( 'shop/compare.php', array( 
					'products' 			  => $yith_woocompare->obj->get_products_list(), 
					'fields' 			  => $yith_woocompare->obj->fields(),
					'repeat_price' 		  => get_option( 'yith_woocompare_price_end' ),
					'repeat_add_to_cart'  => get_option( 'yith_woocompare_add_to_cart_end' )
				) );
			}
		} else {
			echo '<p class="alert alert-danger">' . esc_html__( 'You need to enable YITH Compare plugin for product comparison to work', 'cartzilla-extensions' ) . '</p>';
		}
		
		return ob_get_clean();
	}
}

add_shortcode( 'cartzila_compare_page', 'cartzila_compare_page_shortcode' );